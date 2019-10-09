const SYMBOL_LIST = ['', 'K', 'M', 'B'];

/**
 * Convert number into human numbers
 *
 * @param {Number} number
 * @param {Int} digits
 */
const toAbr = (number, digits = 1) => {
  if (isNaN(number)) {
    return 0;
  }

  const absNumber = Math.abs(number);
  const sign = [0, 1].includes(Math.sign(number)) ? 1 : -1;

  let abr = 0;
  let symbol = '';

  for (let i = 0; i <= SYMBOL_LIST.length; i++) {
    const reference = 1000 ** parseInt(i, 10);

    if (absNumber >= reference) {
      abr = absNumber / reference;
      symbol = SYMBOL_LIST[i];
    }
  }

  const res =
    absNumber < 1000 ? abr * sign : parseFloat(abr * sign).toFixed(digits);

  return `${res}${symbol}`;
};

export { toAbr as default };
