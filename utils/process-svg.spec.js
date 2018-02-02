const { processFile, readFile, processSVGData, validateAttrs } = require('./process-svg');

const ICONS = ['utils/samples/icon_sample_m_black.svg']

describe('optimize-svg', () => {
    describe('main file processing', () => {
        it('should process file without errors', (done) => {
            ICONS.forEach((item) => {
                processFile(item)
                    .then(() => { done(); })
                    .catch((error) => { done(error); });
            })
        });
    });

    describe('svgo optimization', () => {
        it('should optimize svg file without errors', (done) => {
            ICONS.forEach((item) => {
                readFile(item)
                    .then((data) => {
                        processSVGData(item, data)
                            .then(() => { done(); })
                            .catch((error) => { done(error); });
                    })
                    .catch((error) => { done(error); });
            })
        });
    });

    describe('attrs validation', () => {
        it('should process validation', (done) => {
            ICONS.forEach((item) => {
                readFile(item)
                    .then((data) => {
                        validateAttrs(item, data)
                            .then(() => { done(); })
                            .catch((error) => { done(error); });
                    })
                    .catch((error) => { done(error); });
            })
        });
    });
});
