const oneThousand = 1000
const oneMillion = 1000 ** 2
const oneBillion = 1000 ** 3 // Billion US = thousands of millions

export const toAbr = (number, digits) => {
  let abr = number
  let symbol = ''
  const symbolList = ['K', 'M', 'B']

  if (isNaN(number) || number < 0) {
    return 0
  }

  for (let i = symbolList.length - 1; i >= 0; i--) {
    const reference = 1000 ** parseInt(i + 1)

    if (number >= reference) {
      abr = number / reference
      symbol = symbolList[i]
      break
    }
  }

  return number < 1000 ? number : `${parseFloat(abr).toFixed(digits)}${symbol}`
}
