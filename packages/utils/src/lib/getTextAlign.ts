import {isTextNode} from "@utils/isTypeNode";

/**
 * @category Style Utils
 * @description Converts Figma's textAlignHorizontal to CSS textAlign
 *
 */
export const getTextAlign = (node: BaseNode) => {
  const styles: {
    textAlign?: 'left' | 'center' | 'right' | 'justify'
  } = {}

  if (!isTextNode(node)) {
    return styles
  } else {
    const nodeType = node as TextNode
    switch (nodeType.textAlignHorizontal) {
      case 'LEFT':
        styles.textAlign = 'left'
        break
      case 'CENTER':
        styles.textAlign = 'center'
        break
      case 'RIGHT':
        styles.textAlign = 'right'
        break
      case 'JUSTIFIED':
        styles.textAlign = 'justify'
        break
      default:
        break
    }

    return styles
  }

}