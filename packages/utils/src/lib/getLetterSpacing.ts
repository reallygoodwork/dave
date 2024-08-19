import {isTextNode} from "@utils/isTypeNode";
import {loadFont} from "@lib/loadFont";

/**
 * @category Style Utils
 * @description Converts Figma's textDecoration to CSS textDecoration
 *
 */
export const getLetterSpacing = async (node: BaseNode) => {
  const styles: {
    letterSpacing?: string
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    await loadFont(nodeType)
    const letterSpacing = nodeType.getRangeLetterSpacing(0, nodeType.characters.length)
    if (letterSpacing === figma.mixed) {
      return
    } else {
      styles.letterSpacing = letterSpacing.value + letterSpacing.unit
    }
  }

  return styles
}