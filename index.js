export const toAbr = (number, digits) => {

  if (isNaN(number)) {
    return 0
  }

  let absNumber = Math.abs(number)
  let abr = absNumber
  let sign = Math.sign(number) === -1 || Math.sign(number) === -0 ? -1 : 1;

  let symbol = ''
  const symbolList = ['K', 'M', 'B']



  for (let i = symbolList.length - 1; i >= 0; i--) {
    const reference = 1000 ** parseInt(i + 1)

    if (absNumber >= reference) {
      abr = absNumber / reference
      symbol = symbolList[i]
      break
    }
  }

  return absNumber < 1000 ? sign * number : `${parseFloat((abr*sign)).toFixed(digits)}${symbol}`
}
