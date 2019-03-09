.PHONY: build deps

build:
	pandoc -H assets/style.css -B assets/banners.html -f markdown -t html resume.md > docs/index.html
	tidy -w 0 -qim docs/index.html
	node pdfprint/index.js file://$(shell pwd)/docs/index.html docs/GregLutostanski.pdf

deps:
	apt-get install -y cabal-install pandoc tidy
	cabal install pandoc-sidenote
	cd pdf; yarn install; cd ..
