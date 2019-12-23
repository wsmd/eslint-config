module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
      },
      env: {
        es6: true,
        browser: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'warn',
          {
            ignoreRestArgs: true,
          },
        ],
        '@typescript-eslint/camelcase': [
          'error',
          {
            properties: 'never',
            ignoreDestructuring: true,
          },
        ],
        // overriding the eslint rule with the typescript rule (it throws otherwise)
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // overriding eslint-config-airbnb import/extensions configuration to allow typescript files
        // https://github.com/airbnb/javascript/blob/6d05dd8/packages/eslint-config-airbnb-base/rules/imports.js#L139-L143
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};
