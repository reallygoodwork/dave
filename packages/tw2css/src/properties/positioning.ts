import type { PropertyMapType } from "./propertyMapType.ts";

export const positioning: PropertyMapType = {
  absolute: {
    name: "position",
    transform: () => "absolute",
  },
  relative: {
    name: "position",
    transform: () => "relative",
  },
  fixed: {
    name: "position",
    transform: () => "fixed",
  },
  sticky: {
    name: "position",
    transform: () => "sticky",
  },
  static: {
    name: "position",
    transform: () => "static",
  },
};
