import js from '@eslint/js'
import astro from 'eslint-plugin-astro'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'newporthomeopathy-main/**'],
  },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
]
