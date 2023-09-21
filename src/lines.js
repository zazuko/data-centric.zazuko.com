export function selectLines(str, { from = 1, to, num } = {}) {
  const fromChar = str.split('\n', from - 1).join('\n').length
  let toChar

  if (to) {
    toChar = str.split('\n', to).join('\n').length
  } else if(num) {
    toChar = str.split('\n', from + num).join('\n').length
  }

  return str.substring(fromChar, toChar).trim()
}
