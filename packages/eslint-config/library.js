import EslintReact from 'eslint-plugin-react';
import EslintReactHooks from 'eslint-plugin-react-hooks';
import EslintImport from 'eslint-plugin-import';
import EslintPluginPrettier from 'eslint-plugin-prettier';
import TypeScriptParser from '@typescript-eslint/parser';

export default [
  {
    name: 'library',
    files: ["*.js?(x)", "*.ts?(x)"],
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      "dist/",
      "pnpm-lock.yaml",
    ],
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
    },
    languageOptions: {
      parser: TypeScriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
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
    plugins: {
      EslintReactHooks,
      EslintReact,
      EslintImport,
      EslintPluginPrettier
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];