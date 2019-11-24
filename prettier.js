/**
 * ESLint configuration for enforcing Prettier formatting
 *
 * By applying this configuration alone you get prettier support. This includes:
 *   - Disabling all ESLint rules that may conflicts with prettier formatting.
 *   - Report prettier violations as ESLint issues.
 *
 * This configuration must be applied after all other configurations.
 */
module.exports = {
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
};
