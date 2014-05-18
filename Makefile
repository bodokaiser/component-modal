SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

build:
	@component install --dev
	@component build --dev

clean:
	@rm -rf build components node_modules

.PHONY: build clean
