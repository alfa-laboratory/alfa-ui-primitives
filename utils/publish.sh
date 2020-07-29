#!/usr/bin/env bash

rm -rf .publish
mkdir .publish
cp -r {icons,styles,package.json,README.md,.npmrc} .publish
cd .publish
npm publish

echo "Publishing package to registry..."

git push origin master
git push --tags
