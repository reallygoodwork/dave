import {isTextNode} from "@utils/isTypeNode";
import {loadFont} from "@lib/loadFont";

/**
 * @category Style Utils
 * @description Converts Figma's textTransform to CSS textTransform
 *
 */
export const getTextTransform = async (node: BaseNode) => {
  const styles: {
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | 'small-caps'
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    await loadFont(nodeType)
    switch (nodeType.textCase) {
      case 'UPPER':
        styles.textTransform = 'uppercase'
        break
      case 'LOWER':
        styles.textTransform = 'lowercase'
        break
      case 'TITLE':
        styles.textTransform = 'capitalize'
        break
      case 'ORIGINAL':
        styles.textTransform = 'none'
        break
      case 'SMALL_CAPS':
        styles.textTransform = 'small-caps'
        break
      default:
        break
    }

    return styles
  }
}