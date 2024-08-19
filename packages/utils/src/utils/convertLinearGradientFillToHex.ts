import { colord } from 'colord'

export const convertGradientTransformToDegree = (matrix: Transform): number => {
  const values = [...matrix[0], ...matrix[1]]
  const a = values[0] ?? 0
  const b = values[1] ?? 0
  const angle = Number((Math.atan2(b, a) * (180 / Math.PI) + 90).toFixed(2))

  return angle <= 0 ? angle + 360 : angle
}

export const convertLinearGradientFillToHex = (linearGradientPaint: GradientPaint): string => {
  const angle = convertGradientTransformToDegree(linearGradientPaint.gradientTransform)
  return `${angle}deg, ${linearGradientPaint.gradientStops
    .map((stop) => {
      return `${colord({
        r: stop.color.r * 255,
        g: stop.color.g * 255,
        b: stop.color.b * 255,
        a: stop.color.a,
      }).toRgbString()} ${parseFloat((stop.position * 100).toFixed(2))}%`
    })
    .join(',')}`
}