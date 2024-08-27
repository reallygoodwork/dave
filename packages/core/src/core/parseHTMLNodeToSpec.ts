import { HTMLElement, TextNode } from "node-html-parser";
import { UISpecRoot } from "@configTypes/Base.ts";
import { BaseSpec } from "../index.ts";
import { pascalCaseString } from "@utils/pascalCaseString.ts";
import { createAttributes } from "@core/createAttributes.ts";
import { styleAttributeToObject } from "@core/styleAttributeToObject.ts";
import { twj } from "tw-to-css";

export const parseNode = (node: HTMLElement): UISpecRoot => {
  const hasText = node.childNodes.some(
    (childNode) =>
      childNode.nodeType === 3 && !(childNode as TextNode).isWhitespace,
  );

  const spec: UISpecRoot = {
    ...BaseSpec,
    name: pascalCaseString(node.tagName),
    elementType: node.tagName.toLowerCase(),
    elementAttributes: createAttributes(node.attributes),
    styles: {
      ...styleAttributeToObject(node.getAttribute("style")),
      ...twj(node.classList.toString()),
    },
    children: [],
  };

  if (hasText) {
    spec.hasText = true;
    spec.textValue = node.childNodes
      .filter((childNode) => childNode.nodeType === 3)
      .map((childNode) => childNode.innerText.trim())
      .join(" ");
  }

  // Recursively parse children nodes
  node.childNodes.forEach((childNode) => {
    if (childNode instanceof HTMLElement) {
      spec.children?.push(parseNode(childNode));
    }
  });

  return spec;
};
