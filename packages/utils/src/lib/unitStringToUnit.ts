export function unitStringToUnit(unit: string) {
  switch (unit) {
    case 'PIXELS':
      return 'px'
    case 'PERCENT':
      return '%'
    default:
      return ''
  }
}