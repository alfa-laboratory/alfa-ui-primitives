#!/usr/bin/env bash

npm set registry https://registry.npmjs.org
npm whoami

rm -rf .publish
mkdir .publish
cp -r {icons,styles,package.json,README.md} .publish
cd .publish
npm publish

echo "Publishing package to registry..."

git push origin master
git push --tags
