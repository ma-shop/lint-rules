// this file is stupid but nessissary for now because of this stupid warning
//
// (node:3893) [ESLINT_LEGACY_OBJECT_REST_SPREAD] DeprecationWarning:
// The 'parserOptions.ecmaFeatures.experimentalObjectRestSpread' option is deprecated.
// Use 'parserOptions.ecmaVersion' instead.
// (found in "eslint-config-airbnb-base/index.js")

const config = require('eslint-config-airbnb-base')


delete config.parserOptions.ecmaFeatures
config.parserOptions.ecmaVersion = 2018
module.exports = config

// something happened here
