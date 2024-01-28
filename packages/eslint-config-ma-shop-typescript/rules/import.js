module.exports = {
  extends: [ 'plugin:import/typescript' ],
  settings: {
    'import/resolver': {
      // You will also need to install and configure the TypeScript resolver
      // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
      typescript: true,
      node: true,
    },
  },
  rules: {
    'import/consistent-type-specifier-style': [ 'error' ],
  },
}
