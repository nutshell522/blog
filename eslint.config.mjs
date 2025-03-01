import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import tailwindcss from 'eslint-config-tailwindcss';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'plugin:@typescript-eslint/recommended'),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier,
      tailwindcss,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'prettier/prettier': 'error', 
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
      'tailwindcss/classnames-order': 'off', 
    },
    settings: {
      'import/resolver': {
        typescript: {},
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    ignores: ['!**/*.{js,jsx,ts,tsx}', 'node_modules', '.next', 'contentLayerAdapter.ts'],
  },
];

export default eslintConfig;
