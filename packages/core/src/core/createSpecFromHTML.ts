import { UISpecRoot } from "@configTypes/Base.ts";
import { parse, HTMLElement } from "node-html-parser";
import { parseNode } from "@core/parseHTMLNodeToSpec.ts";

// Convert Style String to Object
export const createSpecFromHTML = (html: string): UISpecRoot => {
  const root = parse(html);

  if (!root) {
    throw new Error("Invalid HTML");
  } else if (root.childNodes.length === 0) {
    throw new Error("Empty HTML");
  }

  const firstChild = root.firstChild?.rawTagName;
  if (!firstChild) {
    throw new Error("Invalid HTML");
  }

  return parseNode(root.firstChild as HTMLElement);
};
