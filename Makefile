PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash
args = $(filter-out $@, $(MAKECMDGOALS))

# installs node
install:
	@yarn install
	@lerna bootstrap
	@make lint-json

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

# formats and lints all the files
lint:
	@make lint-js lint-json lint-md --jobs

# formats your js code with prettier, then lints them with eslint
lint-js:
	@eslint --cache --fix packages/*/index.js packages/*/rules/*.js

# formats your markdown files with prettier
lint-md:
	@prettier --parser markdown '**/*.md' --write

# formats your json files with prettier
lint-json:
	@prettier --parser json '**/*.json' --write

# run any tests
test:
	@make lint

publish:
	@make lint
	@lerna publish
