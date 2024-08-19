import {isTextNode} from "@utils/isTypeNode";
import {loadFont} from "@lib/loadFont";
import {unitStringToUnit} from "@lib/unitStringToUnit";

/**
 * @category Style Utils
 * @description Converts Figma's textDecoration to CSS textDecoration
 *
 */
export const getLineHeight = async (node: BaseNode) => {
  const styles: {
    lineHeight?: string
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    await loadFont(nodeType)
    const letterSpacing = nodeType.getRangeLineHeight(0, nodeType.characters.length)
    if (letterSpacing === figma.mixed) {
      return
    } else {
      styles.lineHeight = letterSpacing.unit === 'AUTO' ? 'normal' : letterSpacing.value + unitStringToUnit(letterSpacing.unit)
    }
  }

  return styles
}