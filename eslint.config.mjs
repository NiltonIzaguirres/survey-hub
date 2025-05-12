// eslint.config.js
import standard from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  standard.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'semi': ['error', 'always'], // <- Use esta regra
    },
  },
  {
    ignores: ['node_modules', '.vscode'],
  },
];
