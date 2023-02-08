const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@iceworks/best-practices/no-js-in-ts-project': 0,
    '@typescript-eslint/no-require-imports': 0,
    'no-cond-assign': 0,
    '@typescript-eslint/consistent-type-imports': 'warn',
    'react/jsx-key': 1,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'no-case-declarations': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    'no-new': 0,
  },
});
