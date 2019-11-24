/**
 * ESLint configuration for React projects.
 *
 * By applying this configuration alone you get:
 *   - Airbnb Javascript+React Style Guide
 *   - eslint-plugin-react-hooks
 *   - The base configuration overrides (see base.js)
 *
 * Note that this does not add support for TypeScript. For that you need to
 * extend the `typescript` config as well.
 */
module.exports = {
  extends: [
    'airbnb',
    // eslint-config-airbnb already extends eslint-config-airbnb-base, so here
    // I'm making sure the base overrides would still carry over when extending
    // the react config
    require.resolve('./base'),
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
