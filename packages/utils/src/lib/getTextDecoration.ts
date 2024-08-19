import {isTextNode} from "@utils/isTypeNode";
import {loadFont} from "@lib/loadFont";

/**
 * @category Style Utils
 * @description Converts Figma's textDecoration to CSS textDecoration
 *
 */
export const getTextDecoration = async (node: BaseNode) => {
  const styles: {
    textDecoration?: 'underline' | 'overline' | 'line-through' | 'none' | 'inherit' | 'initial' | 'unset'
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    await loadFont(nodeType)
    switch (nodeType.textDecoration) {
      case 'NONE':
        styles.textDecoration = 'none'
        break
      case 'UNDERLINE':
        styles.textDecoration = 'underline'
        break
      case 'STRIKETHROUGH':
        styles.textDecoration = 'line-through'
        break
      default:
        break
    }
  }

  return styles
}