import { isTextNode } from '@utils/isTypeNode'
import {loadFont} from "@lib/loadFont";

/**
 * @category Style Utils
 * @description Converts Figma's textDecoration to CSS textDecoration
 *
 */
export const getFontName = async (node: BaseNode) => {
  const styles: {
    fontFamily?: string | undefined
    fontWeight?: string
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    await loadFont(nodeType)
    const fontFamily = nodeType.getRangeFontName(0, nodeType.characters.length)
    if (fontFamily === figma.mixed) {
      return styles
    } else {
      if ('fontName' in fontFamily) {
        styles.fontFamily = fontFamily.fontName as string
        styles.fontWeight = fontFamily.style
      } else {
        styles.fontFamily = fontFamily.family
      }
    }
  }

  return styles
}
