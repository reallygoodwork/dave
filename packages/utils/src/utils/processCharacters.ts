const lineBreakRegExp = /\r\n|[\n\r\u2028\u2029\u0085]/

export const processCharacters = (characters: string): string[] => {
  const lines = characters.split(lineBreakRegExp)
  const results: string[] = []
  for (let i = 0; i < lines.length; ++i) {
    if (i !== 0) {
      results.push('br')
    }

    if (lines[i] !== undefined) {
      results.push(lines[i] || ' ')
    }
  }
  return results
}