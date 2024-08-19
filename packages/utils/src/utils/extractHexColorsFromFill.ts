import { defineNodeType } from '@utils/defineNodeType'
import { colord } from 'colord'

export const extractHexColorsFromFill = (node: SceneNode): string[] => {
  const colors = new Set<string>()
  const nodeType = defineNodeType(node)

  if ('fills' in nodeType && Array.isArray(nodeType.fills)) {
    nodeType.fills.forEach((fill: Paint) => {
      if (fill.type === 'SOLID') {
        const color = colord(fill.color)
        if (color.isValid()) {
          colors.add(color.toHex())
        }
      } else if (fill.type === 'GRADIENT_LINEAR' || fill.type === 'GRADIENT_RADIAL') {
        fill.gradientStops.forEach((stop) => {
          const color = colord(stop.color)
          if (color.isValid()) {
            colors.add(color.toHex())
          }
        })
      }
    })
  }

  return Array.from(colors)
}
