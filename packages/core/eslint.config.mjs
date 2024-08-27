import { resolve } from "node:path";
import process from "node:process";
const project = resolve(process.cwd(), "tsconfig.json");
import EslintImport from "eslint-plugin-import";
import EslintPluginPrettier from "eslint-plugin-prettier";
import TypeScriptParser from "@typescript-eslint/parser";

export default [
  {
    name: "utils",
    files: ["*.js?(x)", "*.ts?(x)"],
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
      },
    },
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      "dist/",
      "pnpm-lock.yaml",
    ],
    rules: {
      // "import/no-unresolved": "error",
    },
    plugins: {
      EslintImport,
      EslintPluginPrettier,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
];
