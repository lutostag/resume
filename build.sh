#!/bin/sh
pandoc -H style.css -f markdown -t html resume.md > resume.html
tidy -qim resume.html || true
weasyprint resume.html GregLutostanskiResume.pdf
