import { HTMLElement, TextNode } from "node-html-parser";
import { UISpecRoot } from "@configTypes/Base.ts";
import { BaseSpec } from "../index.ts";
import { pascalCaseString } from "@utils/pascalCaseString.ts";
import { createAttributes } from "@core/createAttributes.ts";
import { styleAttributeToObject } from "@core/styleAttributeToObject.ts";
import { twj } from "tw-to-css";
import { parseTailwindString } from "@reallygoodwork/tw2css";

export const parseNode = (node: HTMLElement): UISpecRoot => {
  const hasText = node.childNodes.some(
    (childNode) =>
      childNode.nodeType === 3 && !(childNode as TextNode).isWhitespace,
  );

  const spec: UISpecRoot = {
    ...BaseSpec,
    name: pascalCaseString(node.tagName),
    elementType: node.tagName.toLowerCase(),
    styles: {
      ...styleAttributeToObject(node.getAttribute("style")),
      ...twj(node.classList.toString()),
    },
  };

  parseTailwindString(node.classList.toString());

  if (Object.keys(node.attributes).length) {
    const { style: _0, class: _1, ...rest } = node.attributes;
    if (Object.keys(rest).length) {
      spec.elementAttributes = createAttributes(rest);
    }
  }

  if (hasText) {
    spec.hasText = true;
    spec.textValue = node.childNodes
      .filter((childNode) => childNode.nodeType === 3)
      .map((childNode) => childNode.innerText.trim())
      .join(" ");
  }

  if (node.childNodes.length > 0 && !hasText) {
    spec.children = [];
  }

  // Recursively parse children nodes
  node.childNodes.forEach((childNode) => {
    if (childNode instanceof HTMLElement) {
      spec.children?.push(parseNode(childNode));
    }
  });

  return spec;
};
