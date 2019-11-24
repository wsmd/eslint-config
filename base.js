module.exports = {
  extends: ['airbnb-base'],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'no-console': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/prefer-default-export': 'off',
  },
};
