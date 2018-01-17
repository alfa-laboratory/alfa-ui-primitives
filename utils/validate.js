#!/usr/bin/env node

const exec = require('child_process').execSync;
const path = require('path');

const FILENAME_REGEXP = /(icon|art)_(?!-)[a-z-]+(?!-)_(xs|s|m|l|xl|xxl)_(black|color|white)\.svg$/i;

function getFilesInCommit() {
    return exec('git diff-tree --no-commit-id --name-only -r `git rev-parse --verify HEAD`').toString().trim();
}

getFilesInCommit()
    .split('\n')
    .filter(item => path.extname(item) === '.svg')
    .forEach(file => {
        if (!FILENAME_REGEXP.test(file)) {
            throw `Error! Incorrect file name for ${file}. It must follow the pattern 'icon_name_size_theme.svg'.`;
        }

        exec(`./node_modules/.bin/svgo --disable removeViewBox ${path.resolve(file)}`, { stdio: 'inherit' });
        exec('git add . && git commit -m "chore(*): optimize svg" && git push');
    }
);
