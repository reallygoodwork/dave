import type { PropertyMapType } from "./propertyMapType.ts";

export const layout: PropertyMapType = {
  flex: {
    name: "display",
    transform: () => "flex",
  },

  block: {
    name: "display",
    transform: () => "block",
  },
  inline: {
    name: "display",
    transform: () => "inline",
  },
  hidden: {
    name: "display",
    transform: () => "none",
  },
  "inline-block": {
    name: "display",
    transform: () => "inline-block",
  },
  "inline-flex": {
    name: "display",
    transform: () => "inline-flex",
  },
  table: {
    name: "display",
    transform: () => "table",
  },
  "inline-table": {
    name: "display",
    transform: () => "inline-table",
  },
  "table-caption": {
    name: "display",
    transform: () => "table-caption",
  },
  "table-row": {
    name: "display",
    transform: () => "table-row",
  },
  "table-cell": {
    name: "display",
    transform: () => "table-cell",
  },
  "table-column": {
    name: "display",
    transform: () => "table-column",
  },
  "table-column-group": {
    name: "display",
    transform: () => "table-column-group",
  },
  "table-footer-group": {
    name: "display",
    transform: () => "table-footer-group",
  },
  "table-header-group": {
    name: "display",
    transform: () => "table-header-group",
  },
  "table-row-group": {
    name: "display",
    transform: () => "table-row-group",
  },
  "flow-root": {
    name: "display",
    transform: () => "flow-root",
  },
  grid: {
    name: "display",
    transform: () => "grid",
  },
  "inline-grid": {
    name: "display",
    transform: () => "inline-grid",
  },
  contents: {
    name: "display",
    transform: () => "contents",
  },
  "list-item": {
    name: "display",
    transform: () => "list-item",
  },
};
