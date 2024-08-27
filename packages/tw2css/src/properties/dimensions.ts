import { detectSpacingValue } from "../utils/detectSpacingValue.ts";
import type { PropertyMapType } from "./propertyMapType.ts";

export const dimensions: PropertyMapType = {
  w: {
    name: "width",
    transform: detectSpacingValue,
  },
  h: {
    name: "height",
    transform: detectSpacingValue,
  },
  "min-h": {
    name: "min-height",
    transform: detectSpacingValue,
  },
  "min-w": {
    name: "min-width",
    transform: detectSpacingValue,
  },
  "max-h": {
    name: "max-height",
    transform: detectSpacingValue,
  },
  "max-w": {
    name: "max-width",
    transform: detectSpacingValue,
  },
  m: {
    name: "margin",
    transform: detectSpacingValue,
  },
  p: {
    name: "padding",
    transform: detectSpacingValue,
  },
  my: {
    name: ["margin-block-start", "margin-block-end"],
    transform: detectSpacingValue,
  },
  mx: {
    name: ["margin-inline-start", "margin-inline-end"],
    transform: detectSpacingValue,
  },
  mt: {
    name: "margin-block-start",
    transform: detectSpacingValue,
  },
  mr: {
    name: "margin-inline-end",
    transform: detectSpacingValue,
  },
  mb: {
    name: "margin-block-end",
    transform: detectSpacingValue,
  },
  ml: {
    name: "margin-inline-start",
    transform: detectSpacingValue,
  },
  py: {
    name: ["padding-block-start", "padding-block-end"],
    transform: detectSpacingValue,
  },
  px: {
    name: ["padding-inline-start", "padding-inline-end"],
    transform: detectSpacingValue,
  },
  pt: {
    name: "padding-block-start",
    transform: detectSpacingValue,
  },
  pr: {
    name: "padding-inline-end",
    transform: detectSpacingValue,
  },
  pb: {
    name: "padding-block-end",
    transform: detectSpacingValue,
  },
  pl: {
    name: "padding-inline-start",
    transform: detectSpacingValue,
  },
  top: {
    name: "top",
    transform: detectSpacingValue,
  },
  right: {
    name: "right",
    transform: detectSpacingValue,
  },
  bottom: {
    name: "bottom",
    transform: detectSpacingValue,
  },
  left: {
    name: "left",
    transform: detectSpacingValue,
  },
  gap: {
    name: "gap",
    transform: detectSpacingValue,
  },
  size: {
    name: ["width", "height"],
    transform: detectSpacingValue,
  },
  inset: {
    name: "inset",
    transform: detectSpacingValue,
  },
  "inset-x": {
    name: ["left", "right"],
    transform: detectSpacingValue,
  },
  "inset-y": {
    name: ["top", "bottom"],
    transform: detectSpacingValue,
  },
  start: {
    name: "inset-inline-start",
    transform: detectSpacingValue,
  },
  end: {
    name: "inset-inline-end",
    transform: detectSpacingValue,
  },
};
