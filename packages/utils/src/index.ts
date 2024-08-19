export { defineNodeType } from '@utils/defineNodeType'
export { doesNodeHaveChildren } from '@utils/doesNodeHaveChildren'
export { extractHexColorsFromFill } from '@utils/extractHexColorsFromFill'
export { convertNodeToObject } from '@utils/convertNodeToObject'
export { VectorLikeNodeChecker } from '@utils/vectorLikeNodeChecker'
export {
  isGroupNode,
  isTextNode,
  isVectorNode,
  isBooleanOperationNode,
  isComponentNode,
  isComponentSetNode,
  isInstanceNode,
  isFrameNode,
  isPageNode,
  isDocumentNode,
  isRectangleNode,
  isEllipseNode,
  isLineNode,
  isPolygonNode,
  isStarNode,
  isSliceNode,
  isHighlightNode,
  isWashiTapeNode,
  isSectionNode,
  isOneOfNodeType,
} from '@utils/isTypeNode'
export { findChildStyles } from '@utils/findChildStyles'
export { processCharacters } from '@utils/processCharacters'
export { convertLinearGradientFillToHex, convertGradientTransformToDegree } from '@utils/convertLinearGradientFillToHex'
export { doesNodeHaveImageFill } from '@utils/doesNodeHaveImageFill'

// Style Utils
export { getBorderRadius } from '@lib/getBorderRadius'
export { getTextAlign } from '@lib/getTextAlign'
export { getTextDecoration } from '@lib/getTextDecoration'
export { getFontSize } from '@lib/getFontSize'
export { getFontWeight } from '@lib/getFontWeight'
export { getTextTransform } from '@lib/getTextTransform'
export { getLetterSpacing } from '@lib/getLetterSpacing'
export { getLineHeight } from '@lib/getLineHeight'
export { getFontName } from '@lib/getFontName'