PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash
args = $(filter-out $@, $(MAKECMDGOALS))

install:
	type yarn 2>/dev/null && yarn install || npm install

deep-clean clean:
	rm -rf node_modules

reinstall setup:
	make clean
	make install

lint:
	eslint .

test:
	make lint
