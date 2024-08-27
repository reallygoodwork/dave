import { UISpecRoot } from "@configTypes/Base.ts";

/*
 * Check if a node has children
 * @param node - The node to check
 * @returns - True if the node has children, false otherwise
 *
 * @category Validation
 * @module doesNodeHaveChildren
 */
export const doesNodeHaveChildren = (node: UISpecRoot): boolean => {
  return node.children ? node.children.length > 0 : false;
};
