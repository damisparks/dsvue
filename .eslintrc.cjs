/* eslint-env node */
// https://github.com/vuejs/eslint-config-typescript#installation
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    // '@vue/eslint-config-typescript/recommended'
  ],
  overrides: [
    {
      files: ['tailwind.config.cjs'],
      rules: { 'no-undef': 'off' },
    },
    {
      files: ['src/layouts/*.vue', 'src/pages/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 2,
  },
}
