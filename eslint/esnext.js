module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      restParams: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      experimentalObjectRestSpread: true
    },
  },
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: {
    'babel/generator-star-spacing': [ 'off', 'before' ],
    'generator-star-spacing': [ 'off', 'before' ],

    'babel/new-cap': 'error',
    'new-cap': 'off',

    'babel/object-curly-spacing': [ 'error', 'always' ],
    'object-curly-spacing': 'off',

    'babel/no-await-in-loop': 'warn',
  }
};
