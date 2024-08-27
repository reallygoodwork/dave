import { resolve } from 'node:path'
import process from 'node:process'
import TypeScriptParser from '@typescript-eslint/parser'
import EslintImport from 'eslint-plugin-import'
import EslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import EslintReact from 'eslint-plugin-react'
import EslintReactHooks from 'eslint-plugin-react-hooks'

const project = resolve(process.cwd(), 'tsconfig.json')

export default [
  {
    name: 'figma-dave',
    files: ['*.js?(x)', '*.ts?(x)'],
    ignores: [
      // Ignore dotfiles
      '.*.js',
      'node_modules/',
      'dist/',
      'pnpm-lock.yaml',
    ],
    languageOptions: {
      parser: TypeScriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        env: {
          node: true,
          browser: true,
          es2021: true,
        },
        globals: {
          React: true,
          JSX: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
    plugins: {
      EslintReactHooks,
      EslintReact,
      EslintImport,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
  EslintPluginPrettier,
]
