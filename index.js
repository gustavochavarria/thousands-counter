const SYMBOL_LIST = ['', 'K', 'M', 'B'];
const OPTIONS = {
  digits: 0,
  uppercase: true
};

/**
 * Convert number into human numbers
 *
 * @param {Number} number
 * @param {Object} options
 */
const toAbr = (number, options = {}) => {
  if (isNaN(number)) {
    return 0;
  }

  const absNumber = Math.abs(number);

  if (absNumber < 1000) {
    return Number(number);
  }

  const { digits, uppercase } = { ...OPTIONS, ...options };
  const sign = [0, 1].includes(Math.sign(number)) ? 1 : -1;

  let abr = 0;
  let symbol = '';

  for (let i = 0; i <= SYMBOL_LIST.length; i++) {
    const reference = 1000 ** i;

    if (absNumber >= reference) {
      abr = absNumber / reference;
      symbol = uppercase ? SYMBOL_LIST[i] : SYMBOL_LIST[i].toLowerCase();
    }
  }

  const res =
    digits === 0
      ? Math.floor(abr * sign)
      : parseFloat(abr * sign).toFixed(digits);

  return `${res}${symbol}`;
};

export default toAbr;
