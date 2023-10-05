module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-refresh',
    'simple-import-sort',
  ],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['@/styles/\\w*.css$', '^@/', '^@helpers', '^@shared'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\u0000', '^\\./\\w'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
