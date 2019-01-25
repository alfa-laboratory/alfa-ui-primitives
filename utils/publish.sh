#!/usr/bin/env bash

rm -rf .publish
mkdir .publish
cp -r {icons,package.json,README.md,colors.json} .publish
cd .publish
npm publish

echo "Publishing package to registry..."
