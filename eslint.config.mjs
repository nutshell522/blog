import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import tailwind from 'eslint-plugin-tailwindcss'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends(
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended'
    ),
    ...tailwind.configs['flat/recommended'],
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
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
        ignores: [
            '!**/*.{js,jsx,ts,tsx}',
            'node_modules',
            '.next',
            'contentLayerAdapter.ts',
        ],
    },
    eslintConfigPrettier,
]

export default eslintConfig
