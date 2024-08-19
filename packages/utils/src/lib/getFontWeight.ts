import {isTextNode} from "@utils/isTypeNode";

/**
 * @category Style Utils
 * @description Converts Figma's textDecoration to CSS textDecoration
 *
 */
export const getFontWeight = (node: BaseNode) => {
  const styles: {
    fontWeight?: number
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    const fontWeight = nodeType.getRangeFontWeight(0, nodeType.characters.length)
    if (fontWeight === figma.mixed) {
      return
    } else {
      styles.fontWeight = fontWeight
    }
  }

  return styles
}