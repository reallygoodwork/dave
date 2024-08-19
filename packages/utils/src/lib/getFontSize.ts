import {isTextNode} from "@utils/isTypeNode";

/**
 * @category Style Utils
 * @description Converts Figma's fontSize to CSS fontSize
 *
 */
export const getFontSize = (node: BaseNode) => {
  const styles: {
    fontSize?: string | 'inherit' | 'initial' | 'unset'
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const characterLength = (node as TextNode).characters.length
    const size = node.getRangeFontSize(0, characterLength)
    if (size === figma.mixed) {
      return styles.fontSize = 'inherit'
    } else {
      styles.fontSize = size + 'px'
    }
  }

  return styles
}