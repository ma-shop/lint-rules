PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash
args = $(filter-out $@, $(MAKECMDGOALS))

JS_FILES = packages/*/index.js packages/*/rules/*.js
JSON_FILES = packages/*/*.json

# installs node
install:
	@yarn install
	@lerna bootstrap

# cleans the dist directory of every package
clean:
	@rm -rf packages/*/dist

# cleans node_module folders for everything
deep-clean:
	@make clean
	@rm -rf \
		*.log \
		node_modules \
		packages/*/node_modules \
		packages/*/*.log

# fresh start
reinstall:
	@make deep-clean install

# lints all the files
lint:
	@make format
	@eslint --cache $(JS_FILES)

# formats your code with prettier
format:
	@make format-js format-json --jobs

# formats your js code with prettier
format-js:
	@prettier-eslint $(JS_FILES) --single-quote --trailing-comma all --write

# formats your json files with prettier
format-json:
	@prettier-eslint $(JSON_FILES) --parser json --write

# run any tests
test:
	@make lint
