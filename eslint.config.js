import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'newporthomeopathy-main/**'],
  },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['scripts/**/*.mjs', 'astro.config.mjs', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]
