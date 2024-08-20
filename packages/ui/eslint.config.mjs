import {resolve} from "node:path";
import process from "node:process";
const project = resolve(process.cwd(), "tsconfig.json");
import BaseConfig from "@reallygoodwork/eslint-config/library.js";
export default [
  ...BaseConfig,
  {
    files: ["*.js?(x)", "*.ts?(x)"],
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  }
]