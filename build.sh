#!/bin/sh
cd pdf
yarn install
cd ..

pandoc -H style.css -f markdown -t html resume.md > build/resume.html
tidy -w 0 -qim build/resume.html || true
node pdf/print.js
