import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // 設定針對所有 js、jsx、ts、tsx 檔案
    files: ['**/*.{js,jsx,ts,tsx}'],
    // 載入 prettier 插件
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // 當程式碼與 Prettier 格式不符時，報錯
      'prettier/prettier': 'error',
    },
    // 忽略 node_modules 與 .next 資料夾 以及非 js、jsx、ts、tsx 檔案
    ignores: ['!**/*.{js,jsx,ts,tsx}', 'node_modules', '.next'],
    settings: {
      // Support absolute imports
      // https://www.npmjs.com/package/eslint-import-resolver-alias
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];

export default eslintConfig;
