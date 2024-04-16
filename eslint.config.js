import eslint from '@eslint/js'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import tseslint from 'typescript-eslint'
export default [
  eslint.configs.recommended,
  reactRecommended,
  ...tseslint.configs.recommended,
  // {
  //   files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //     globals: {
  //       ...globals.browser,
  //     },
  //   },
  //   rules: {
  //     // ... any rules you want
  //     'react/jsx-uses-react': 'error',
  //     'react/jsx-uses-vars': 'error',
  //   },
  //   // ... others are omitted for brevity
  // },
]
