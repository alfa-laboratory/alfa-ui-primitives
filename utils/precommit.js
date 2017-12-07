#!/usr/bin/env node

/*
 * Precommit actions:
 * 1. Check file naming policy
 * 2. Optimize added icons via svgo
 */

const exec = require('child_process').execSync;
const path = require('path');

const FILENAME_REGEXP = /(icon|art)_(?!-)[a-z-]+(?!-)_(xs|s|m|l|xl|xxl)_(black|color|white)\.svg$/i;

function getGitCachedFiles(glob) {
    return exec(`git diff --cached --name-only --diff-filter=ACMR ${glob}`).toString().trim();
}

getGitCachedFiles('*.svg')
    .split('\n')
    .filter(item => item)
    .forEach(file => {
        if (!FILENAME_REGEXP.test(file)) {
            throw `Error! Incorrect file name for ${file}. It must follow the pattern 'icon_name_size_theme.svg'.`;
        }

        exec(`./node_modules/.bin/svgo ${path.resolve(file)}`, { stdio: 'inherit' });
        exec('git add .');
    }
);
