import type { PropertyMapType } from "./propertyMapType.ts";
import { detectSpacingValue } from "../utils/detectSpacingValue.ts";

export const flexbox: PropertyMapType = {
  basis: {
    name: "flex-basis",
    transform: detectSpacingValue,
  },
  "flex-row": {
    name: "flex-direction",
    transform: () => "row",
  },
  "flex-row-reverse": {
    name: "flex-direction",
    transform: () => "row-reverse",
  },
  "flex-col": {
    name: "flex-direction",
    transform: () => "column",
  },
  "flex-col-reverse": {
    name: "flex-direction",
    transform: () => "column-reverse",
  },
  "flex-wrap": {
    name: "flex-wrap",
    transform: () => "wrap",
  },
};
