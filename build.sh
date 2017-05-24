#!/bin/sh
pandoc -H style.css -f markdown -t html resume.md | weasyprint - GregLutostanskiResume.pdf
