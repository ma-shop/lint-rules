/* eslint-disable max-lines */


let idMatch
const singleCharacterOverrides = [
  // specific overrides for standard use cases
  '_', // placeholder
  '$', // jquery typically
  'a', // a sort function
  'b', // b sort function
  'e', // event
  'i', // index
  'l', // local
  'm', // args for search
  'n', // number/next
  'P', // prev
  't', // translate
  'w', // args for search
  'x', // x axis
  'y', // y axis
]
{
  // - declarations must end in lowercase letters
  // - multiple capital letters in a row aren't allowed
  // - numbers and symbols aren't allowed

  // only allow the use of a $ at the beginning of a variable
  // @example $woohoo
  const jquery = '\\$?'
  const unsafe = '(?:UNSAFE_)?'
  // @example wooHoo
  const camelCase = `[a-z]+${Array.from({ length: 5 }, () => '(?:[a-z]*[A-Z]{1}[a-z]+)?').join('')}`
  // Only allow specific accronyms on camel case and pascal case declarations.
  // This prevents bad naming conventions.
  // @examples
  // wooHooUI
  // WooHooUI
  const accronyms = [
    'UI',
    'X',
    'Y',
    'Z',
  ].join('|')
  // ensure that snake case variables start and end with a letter
  // @exmaple woo_hoo
  const snakeCase = '(?:[a-z][a-z_]+[a-z])'
  // Allow pascal case. This only allows 1 capital letter to start with
  // and then the rest are camel case rules. These should be used on
  // used for components and classes.
  // @examples
  // Woohoo
  // WooHoo
  const pascalCase = '(?:[A-Z]{1})?'
  const overrides = [
    ...singleCharacterOverrides,
    // h1-h6 in react-native
    '[Hh][1-6]',
    'address[1-7]',
    // specific overrides for terribly named libraries
    'sha1',
    'S3FS',
    'i18n',
    'I18n',
    'selectV2',
    '__DEV__',
    '__dirname',
    '__filename',
    'testID',
    '$',
    'alpha[0-9]',
    'FC', // react functional component for typescript
  ].join('|')
  idMatch = `^${unsafe}${jquery}(?:(?:${pascalCase}${camelCase})(?:${accronyms})?|${snakeCase}|(?:${overrides}))$`
}

module.exports = {
  plugins: [ 'fat-arrow-same-line' ],
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // @todo remove when airbnb enables it
    // alternative 'consistent'
    '@stylistic/array-bracket-newline': [
      'error', {
        multiline: true,
        minItems: 4,
      },
    ],

    // enforce spacing inside array brackets
    '@stylistic/array-bracket-spacing': [ 'error', 'always' ],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline

    // 'array-element-newline': [ 'error', { multiline: true, minItems: 4 } ],
    '@stylistic/array-element-newline': [ 'error', 'consistent' ],


    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    '@stylistic/arrow-parens': [ 'error', 'always' ],

    '@stylistic/arrow-spacing': [
      'error', {
        before: true,
        after: true,
      },
    ],

    '@stylistic/block-spacing': [ 'error', 'always' ],

    '@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],

    '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],

    '@stylistic/comma-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],

    '@stylistic/comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    '@stylistic/computed-property-spacing': [
      'error',
      'never',
    ],

    '@stylistic/dot-location': [
      'error',
      'property',
    ],

    '@stylistic/eol-last': [
      'error',
      'always',
    ],


    '@stylistic/function-call-spacing': [
      'error',
      'never',
    ],


    // "@stylistic/function-call-argument-newline": [],

    '@stylistic/function-paren-newline': [
      'error',
      'consistent',
    ],

    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],


    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // @todo remove this when it's published
    '@stylistic/implicit-arrow-linebreak': [
      'error',
      'beside',
    ],


    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    '@stylistic/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],


    '@stylistic/indent-binary-ops': [ 'error', 2 ],


    '@stylistic/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],

    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],

    '@stylistic/lines-around-comment': [ 'off' ],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // @todo remove this when it's published next major release
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    '@stylistic/max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern:
          // eslint-disable-next-line @stylistic/max-len
          "\\s*(console.(log|warn|info|error|debug).*|(?:(const|let)?([a-zA-Z-\\s]+[=:]\\s)?[`'][^\n]+[`'][,;]?))$",
        ignoreComments: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],


    // restrict the number of statements per line
    // https://eslint.style/rules/default/max-statements-per-line
    '@stylistic/max-statements-per-line': [ 'error', { max: 1 } ],

    // https://eslint.style/rules/default/member-delimiter-style
    // '@stylistic/member-delimiter-style': [],

    // require multiline ternary
    // https://eslint.style/rules/default/multiline-ternary
    '@stylistic/multiline-ternary': [ 'error', 'never' ],

    '@stylistic/new-parens': [
      'error',
      'always',
    ],

    '@stylistic/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],

    '@stylistic/no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // @todo look into
    '@stylistic/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],

    '@stylistic/no-extra-semi': [ 'error' ],


    '@stylistic/no-floating-decimal': [ 'error' ],

    '@stylistic/no-mixed-operators': [
      'error',
      {
        groups: [
          [ '%', '**' ],
          [ '%', '+' ],
          [ '%', '-' ],
          [ '%', '*' ],
          [ '%', '/' ],
          [ '/', '*' ],
          [
            '&',
            '|',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
          ],
          [ '&&', '||' ],
        ],
        allowSamePrecedence: false,
      },
    ],

    '@stylistic/no-mixed-spaces-and-tabs': [ 'error' ],

    '@stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // disallow multiple empty lines and only one newline at the end
    '@stylistic/no-multiple-empty-lines': [
      'error', {
        max: 4,
        maxEOF: 1,
      },
    ],

    '@stylistic/no-tabs': [ 'error' ],

    '@stylistic/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    '@stylistic/no-whitespace-before-property': [ 'error' ],

    '@stylistic/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // enforce line breaks between braces
    // https://eslint.style/rules/default/object-curly-newline
    '@stylistic/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 7,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 2,
          consistent: true,
        },
      },
    ],

    '@stylistic/object-curly-spacing': [
      'error',
      'always',
    ],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/default/object-property-newline
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],

    '@stylistic/one-var-declaration-per-line': [
      'error',
      'always',
    ],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    '@stylistic/operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
          '&&': 'after',
          '||': 'after',
        },
      },
    ],

    '@stylistic/padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // @todo look back into this
    '@stylistic/padding-line-between-statements': [ 'off' ],

    '@stylistic/quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    '@stylistic/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    '@stylistic/rest-spread-spacing': [
      'error',
      'never',
    ],

    // they are pointless and serve no purpose except for a hand full of cases
    // So save hundreds of characters per file
    // Also they get added after transpiling
    '@stylistic/semi': [ 'warn', 'never' ],

    '@stylistic/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    '@stylistic/semi-style': [
      'error',
      'last',
    ],

    '@stylistic/space-before-blocks': [ 'error' ],

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always', // makes function declaration search able
        asyncArrow: 'always',
      },
    ],

    '@stylistic/space-in-parens': [
      'error',
      'never',
    ],

    '@stylistic/space-infix-ops': [ 'error' ],

    '@stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.style/rules/default/spaced-comment
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '/',
            '#',
            '/#',
            '-',
            '+',
          ],
          exceptions: [
            '-',
            '+',
            '/',
            '#',
          ],
        },
        block: {
          markers: [ '!', '*#' ],
          exceptions: [
            '*',
            '#',
            '=',
            '!',
          ],
          balanced: true,
        },
      },
    ],

    '@stylistic/switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    '@stylistic/template-curly-spacing': [ 'error' ],

    '@stylistic/template-tag-spacing': [
      'error',
      'never',
    ],

    '@stylistic/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    '@stylistic/wrap-regex': [ 'off' ],

    '@stylistic/yield-star-spacing': [ 'error', 'after' ],

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',

      {
        // ```js
        // for (var variable in object) {
        //   if (object.hasOwnProperty(variable)) {
        //    // do something
        //   }
        // }
        // ```
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },

      {
        // function *foo() {
        //  // do something
        // }
        selector: 'FunctionDeclaration[generator=true]',
        message:
          'In 99.9% of cases you should be using async/await instead of a generator function',
      },

      // awesome: for (const foo of bar) {
      //   // do something
      // }
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },

      // with (me) {
      //   // do something
      // }
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': [
      'warn',
      {
        min: 2,
        max: 50,
        properties: 'always',
        exceptions: singleCharacterOverrides,
      },
    ],

    // require identifiers to match the provided regular expression
    'id-match': [ 'error', idMatch ],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '.{0,50}',
        applyDefaultPatterns: true,
      },
    ],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    // @todo remove when airbnb enables it
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // limits the number of parameters that can be used in the function declaration.
    // @todo remove when airbnb enables it
    'max-params': [ 'warn', 3 ],


    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': [ 'error', 'separate-lines' ],


    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    // @todo remove this when it's published
    'no-else-return': [ 'error', { allowElseIf: true } ],


    'no-underscore-dangle': [
      'error', {
        allow: [
          '__typename', // for graphql
          '_navigation', // for react-navigation `this.drawer._navigation.closeDrawer()`
          '_id',
        ],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: false,
        enforceInClassFields: false,
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false,
      },
    ],

    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
        allow: [
          'UNSAFE_componentWillMount',
          'UNSAFE_componentWillReceiveProps',
          'UNSAFE_componentWillUpdate',
        ],
      },
    ],


    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // turned off because it's handled by fat-arrow-same-line below
    'arrow-body-style': 'off',
    // removes multi line implicit returns that makes arrow functions confusing
    // @todo update the eslint-plugin-fat-arrow-same-line package once tyler's PR gets merged
    // https://github.com/pzuraq/eslint-plugin-fat-arrow-same-line/pull/3
    'fat-arrow-same-line/fat-arrow-same-line': [
      'error',
      {
        allowTemplates: true,
        allowJSX: true,
        allowObjects: true,
      },
    ],
  },
}
