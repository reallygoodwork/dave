import { PascalCase, Trim } from "type-fest";

export type Properties = {
  figmaNodeRef?: string;
  name: Trim<PascalCase<string>>;
  tsType: "string" | "number" | "boolean" | "object" | "array" | "function";
  defaultValue?: string | number | boolean | Array<any> | Record<string, any>;
  options?: Array<string | number>;
};
