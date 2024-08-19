/**
 * Checks node to be GroupNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isGroupNode = (node: BaseNode): node is GroupNode => {
  return node.type === 'GROUP'
}

/**
 * Checks node to be TextNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isTextNode = (node: BaseNode): node is TextNode => {
  return node.type === 'TEXT'
}

/**
 * Checks node to be VectorNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isVectorNode = (node: BaseNode): node is VectorNode => {
  return node.type === 'VECTOR'
}

/**
 * Checks node to be BooleanOperationNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isBooleanOperationNode = (node: BaseNode): node is BooleanOperationNode => {
  return node.type === 'BOOLEAN_OPERATION'
}

/**
 * Checks node to be ComponentNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isComponentNode = (node: BaseNode): node is ComponentNode => {
  return node.type === 'COMPONENT'
}

/**
 * Checks node to be InstanceNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isInstanceNode = (node: BaseNode): node is InstanceNode => {
  return node.type === 'INSTANCE'
}

/**
 * Checks node to be FrameNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isFrameNode = (node: BaseNode): node is FrameNode => {
  return node.type === 'FRAME'
}

/**
 * Checks node to be PageNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isPageNode = (node: BaseNode): node is PageNode => {
  return node.type === 'PAGE'
}

/**
 * Checks node to be DocumentNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isDocumentNode = (node: BaseNode): node is DocumentNode => {
  return node.type === 'DOCUMENT'
}

/**
 * Checks node to be RectangleNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isRectangleNode = (node: BaseNode): node is RectangleNode => {
  return node.type === 'RECTANGLE'
}

/**
 * Checks node to be EllipseNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isEllipseNode = (node: BaseNode): node is EllipseNode => {
  return node.type === 'ELLIPSE'
}

/**
 * Checks node to be LineNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isLineNode = (node: BaseNode): node is LineNode => {
  return node.type === 'LINE'
}

/**
 * Checks node to be PolygonNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isPolygonNode = (node: BaseNode): node is PolygonNode => {
  return node.type === 'POLYGON'
}

/**
 * Checks node to be StarNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isStarNode = (node: BaseNode): node is StarNode => {
  return node.type === 'STAR'
}

/**
 * Checks node to be SliceNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isSliceNode = (node: BaseNode): node is SliceNode => {
  return node.type === 'SLICE'
}

/**
 * Checks node to be ComponentSetNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isComponentSetNode = (node: BaseNode): node is ComponentSetNode => {
  return node.type === 'COMPONENT_SET'
}

/**
 * Checks node to be HighlightNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isHighlightNode = (node: BaseNode): node is HighlightNode => {
  return node.type === 'HIGHLIGHT'
}

/**
 * Checks node to be WashiTapeNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isWashiTapeNode = (node: BaseNode): node is WashiTapeNode => {
  return node.type === 'WASHI_TAPE'
}

/**
 * Checks node to be SectionNode
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @returns Boolean
 * @category Node
 */
export const isSectionNode = (node: BaseNode): node is SectionNode => {
  return node.type === 'SECTION'
}

/**
 * Checks node to be one of provided types
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 * @param {typeof import("@figma/plugin-typings").NodeType[]} typeList
 * @returns Boolean
 * @category Node
 */
export const isOneOfNodeType = (node: BaseNode, typeList: NodeType[]) => {
  return typeList.includes(node.type)
}




