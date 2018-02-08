const fs = require('fs');
const path = require('path');
const posthtml = require('posthtml');
const { promisify } = require('util');
const SVGO = require('svgo');

const FILENAME_REGEXP = /(icon|art)_(?!-)[a-z-]+(?!-)_(xs|s|m|l|xl|xxl)_(black|color|white)\.svg$/i;
const SVGO_CONFIG = { plugins: [{ removeViewBox: false }] };

const svgo = new SVGO(SVGO_CONFIG);

const FILENAME_DIMENSIONS_MAP = {
    's': '16',
    'm': '24',
    'l': '30',
    'xl': '36',
    'xxl': '48'
};

/**
 * Optimize SVG data.
 * @param {string} filepath filepath where data from & where to write.
 * @param {string} data SVG content to optimize.
 */
function processSVGData(filepath, data) {
    const startTime = Date.now();
    const prevFileSize = Buffer.byteLength(data, 'utf8');

    return svgo.optimize(data, { path: filepath })
        .then((result) => {
            const processingTime = Date.now() - startTime;
            const resultFileSize = Buffer.byteLength(result.data, 'utf8');

            writeOutput(filepath, result.data).then(() => {
                console.log(`\n${path.basename(filepath)}:`);
                printTimeInfo(processingTime);
                printProfitInfo(prevFileSize, resultFileSize);
            });

            return result.data;
        })
}

/**
 * Write result of an optimization.
 * @param {string} filepath where to write file.
 * @param {string} data data to write.
 * @return {Promise}
 */
function writeOutput(filepath, data) {
    return promisify(fs.writeFile)(filepath, data, 'utf8')
        .catch((error) => { throw new Error(error); });
}

/**
 * Write a time taken by optimization.
 * @param {number} time time in milliseconds.
 */
function printTimeInfo(time) {
    console.log(`Done in ${time} ms!`);
}

/**
 * Write optimizing information in human readable format.
 * @param {number} inBytes size before optimization.
 * @param {number} outBytes size after optimization.
 */
function printProfitInfo(inBytes, outBytes) {
    var profitPercents = 100 - outBytes * 100 / inBytes;

    console.log(
        (Math.round((inBytes / 1024) * 1000) / 1000) + ' KiB' +
        (profitPercents < 0 ? ' + ' : ' - ') +
        (Math.abs(Math.round(profitPercents * 10) / 10) + '%') + ' = ' +
        (Math.round((outBytes / 1024) * 1000) / 1000) + ' KiB'
    );
}

/**
 * Validate attributes on svg nodes.
 * @param {string} filepath path to source file.
 * @param {string} data SVG document for validation.
 */
function validateAttrs(filepath, data) {
    return posthtml()
        .process(data)
        .then((result) => {
            const filename = path.basename(filepath);
            const node = result.tree[0];
            const attrs = node.attrs;

            console.log(`Validating attrs for ${filepath}...`);

            if (node.tag !== 'svg') throw new ValidationError('Need to have <svg> tag.');
            if (attrs) {
                if (!attrs.viewBox) throw new ValidationError('Need to have viewBox attr.');
                if (!attrs.width) throw new ValidationError('Need to have width attr.');
                if (!attrs.height) throw new ValidationError('Need to have height attr.');

                if (attrs.width !== attrs.height) throw new ValidationError('Need to have equal width & height.');

                if (!FILENAME_REGEXP.test(filename)) {
                    throw new ValidationError(`Incorrect file name for ${filepath}. It must follow the pattern 'icon_name_size_theme.svg'.`);
                }

                const filenameSize = filename.match(FILENAME_REGEXP)[2];

                if (FILENAME_DIMENSIONS_MAP[filenameSize] !== attrs.width) {
                    throw new ValidationError(`Need to have ${filenameSize} to be equal ${FILENAME_DIMENSIONS_MAP[filenameSize]}px.`);
                }

                const viewBox = attrs.viewBox.match(/0\s0\s\d+\s\d+/g);

                if (viewBox === null) throw new ValidationError(`viewBox must follow pattern '0 0 \d+ \d+'.`);
                if (Array.isArray(viewBox)) {
                    const viewBoxWidth = viewBox[0].split(' ')[2];
                    const viewBoxHeight = viewBox[0].split(' ')[3];

                    if (viewBoxWidth !== viewBoxHeight) throw new ValidationError('viewBox width & height must be equal.')
                    if (viewBoxWidth !== attrs.width) throw new ValidationError('viewBox width & width must be equal.')
                    if (viewBoxHeight !== attrs.height) throw new ValidationError('viewBox height & height must be equal.')
                }
            }
        })
        .catch((error) => { throw error; })
}

/**
 * Represents validation errors.
 * @constructor
 * @param {string} message message for error.
 */
function ValidationError(message) {
    return new Error(`Validation error: ${message}`);
}

/**
 * Process file with oprimization & validation.
 * @param {array} file file to process.
 * @param {Promise}
 */
function processFile(file) {
    return readFile(file)
        .then((data) => {
            processSVGData(file, data)
                .then((data) => {
                    validateAttrs(file, data);
                })
        })
        .catch((error) => { throw new Error(error); });
}

/**
 * Promisify file reading.
 * @param {array} file file to read.
 * @param {Promise}
 */
function readFile(file) {
    return promisify(fs.readFile)(path.resolve(file), 'utf8');
}

exports.readFile = readFile;
exports.processFile = processFile;
exports.processSVGData = processSVGData;
exports.validateAttrs = validateAttrs;
