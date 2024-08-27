import type { UISpecRoot as BaseSpecType } from "@configTypes/Base.ts";

export const BaseSpec: BaseSpecType = {
  name: "BaseSpec",
  children: [],
  elementType: "div",
};

const uiSpecConfig = {
  inputs: [],
  outputDir: "",
  transformers: [],
};

export type UISpecRoot = BaseSpecType;
