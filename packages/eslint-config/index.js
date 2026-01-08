module.exports = {
  extends: ['eslint:recommended', 'turbo', 'prettier'],
  rules: {
    'no-console': 'warn',
    'turbo/no-undeclared-env-vars': 'warn'
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
