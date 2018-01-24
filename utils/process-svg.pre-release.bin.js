#!/usr/bin/env node

const path = require('path');
const GitDiffTags = require('git-diff-tags').default;
const { processFile } = require('./process-svg');

const diff = new GitDiffTags('./');

diff.start()
    .then((files) => {
        if (Array.isArray(files)) {
            console.log(`Optimizing SVG via SVGO...`);

            files.forEach((item) => {
                if (path.extname(item.path) === '.svg' && item.status !== 'D') {
                    processFile(item.path);
                }
            });
        }
    })
    .catch((error) => { throw new Error(error); });
