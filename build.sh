#!/bin/sh
pandoc -H style.css -f markdown -t html resume.md > resume.html
weasyprint resume.html GregLutostanskiResume.pdf
