#!/usr/bin/env bash

rm -rf .publish
mkdir .publish
cp {icons,package.json,README.md} .publish
cd .publish
npm publish


echo "Publishing package to registry..."
