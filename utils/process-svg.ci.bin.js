#!/usr/bin/env node

const path = require('path');
const GitDiffTags = require('git-diff-tags').default;
const { readFile, validateAttrs } = require('./process-svg');

const diff = new GitDiffTags('./');

diff.start()
    .then((files) => {
        if (Array.isArray(files)) {
            files.forEach((item) => {
                if (path.extname(item.path) === '.svg' && item.status !== 'D') {
                    readFile(item.path)
                        .then((data) => {
                            validateAttrs(item.path, data)
                                .catch((error) => { throw new Error(error); });
                        })
                        .catch((error) => { throw new Error(error); });
                }
            });
        }
    })
    .catch((error) => { throw new Error(error); });
