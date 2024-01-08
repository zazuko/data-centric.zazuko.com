export function selectLines(str, { from = 1, to = from, num } = {}) {
  const fromChar = str.split('\n', from - 1).join('\n').length
  let toChar

  if (num) {
    toChar = str.split('\n', from + num).join('\n').length
  } else {
    toChar = str.split('\n', to).join('\n').length
  }

  return str.substring(fromChar, toChar).trim()
}
