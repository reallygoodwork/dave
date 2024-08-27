import type { UISpecRoot as BaseSpecType } from "@configTypes/Base.ts";

export const BaseSpec: BaseSpecType = {
  name: "BaseSpec",
  elementType: "div",
};

export type UISpecRoot = BaseSpecType;

export { createSpecFromHTML } from "@core/createSpecFromHTML.ts";
