import eslint from '@eslint/js'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import tseslint from 'typescript-eslint'
export default [
  eslint.configs.recommended,
  reactRecommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-unused-vars': 0,
    },
  },
]
