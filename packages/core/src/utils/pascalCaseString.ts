import { camelCase, upperFirst } from "lodash";
import { PascalCase } from "type-fest";

export const pascalCaseString = (str: string) => {
  return upperFirst(camelCase(str)) as PascalCase<string>;
};
