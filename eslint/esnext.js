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

    'prefer-const': 'error',
    'object-shorthand': [
      'error',
      'always',
      // { 'avoidQuotes': true, 'avoidExplicitReturnArrows': true },
    ],
    'no-var': 'error',
    // this should be defined but it's not working correctly
    // 'prefer-destructuring': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'template-curly-spacing': [ 'error', 'never' ],
    'yield-star-spacing': [ 'error', 'before' ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      }
    ],
  }
};
