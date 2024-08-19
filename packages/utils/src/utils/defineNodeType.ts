/**
 * @description Define the node type
 * @param {typeof import("@figma/plugin-typings").BaseNode} node
 *
 */
export const defineNodeType = (node: BaseNode) => {
  switch (node.type) {
    case 'GROUP':
      return node as GroupNode
    case 'COMPONENT':
      return node as ComponentNode
    case 'COMPONENT_SET':
      return node as ComponentSetNode
    case 'HIGHLIGHT':
      return node as HighlightNode
    case 'INSTANCE':
      return node as InstanceNode
    case 'RECTANGLE':
      return node as RectangleNode
    case 'TEXT':
      return node as TextNode
    case 'VECTOR':
      return node as VectorNode
    case 'BOOLEAN_OPERATION':
      return node as BooleanOperationNode
    case 'ELLIPSE':
      return node as EllipseNode
    case 'LINE':
      return node as LineNode
    case 'POLYGON':
      return node as PolygonNode
    case 'STAR':
      return node as StarNode
    case 'SLICE':
      return node as SliceNode
    case 'WASHI_TAPE':
      return node as WashiTapeNode
    case 'SECTION':
      return node as SectionNode
    default:
      return node as FrameNode
  }
}
