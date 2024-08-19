export const loadFont = async (node: TextNode) => {
  const fontName = node.getRangeFontName(0, node.characters.length)
  if (fontName === figma.mixed) {
    return
  } else {
    if ('fontName' in fontName) {
      return await figma.loadFontAsync(fontName as FontName)
    } else {
      return await figma.loadFontAsync({ family: fontName.family, style: fontName.style })
    }
  }
}