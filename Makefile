SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

test: build
	@mochify --reporter spec ./build/build.js

build:
	@component install --dev
	@component build --dev

clean:
	@rm -rf build components node_modules

.PHONY: build test clean
