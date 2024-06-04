module.exports = {
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: [
          'strictCamelCase',
          'StrictPascalCase',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
        filter: {
          match: false,
          regex: 'testID',
        },
      },
      {
        selector: [
          'function',
          'import',
        ],
        format: [
          'StrictPascalCase',
          'strictCamelCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: [
          'class',
          'typeLike',
        ],
        format: [ 'StrictPascalCase' ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        types: [ 'boolean' ],
        format: [ 'StrictPascalCase' ],
        prefix: [
          'is',
          'should',
          'has',
          'can',
          'did',
          'will',
          'no',
        ],
      },
      {
        selector: 'memberLike',
        format: [
          'strictCamelCase',
          'StrictPascalCase',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
          match: false,
          regex: 'testID',
        },
      },
      {
        selector: 'interface',
        format: [ 'StrictPascalCase' ],
        custom: {
          regex: '^I[A-Z]|Do not use the I prefix',
          match: false,
        },
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
  },
}
