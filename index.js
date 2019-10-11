const SYMBOL_LIST = ['', 'K', 'M', 'B'];
const OPTIONS = {
  digits: 1,
  uppercase: true,
}

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

  const opt = {
    ...OPTIONS,
    ...options
  }
  const absNumber = Math.abs(number);
  const sign = [0, 1].includes(Math.sign(number)) ? 1 : -1;

  let abr = 0;
  let symbol = '';

  for (let i = 0; i <= SYMBOL_LIST.length; i++) {
    const reference = 1000 ** parseInt(i, 10);

    if (absNumber >= reference) {
      abr = absNumber / reference;
      symbol = opt.uppercase ? SYMBOL_LIST[i] : SYMBOL_LIST[i].toLowerCase();
    }
  }

  const res =
    absNumber < 1000 ? abr * sign : parseFloat(abr * sign).toFixed(opt.digits);

  return `${res}${symbol}`;
};

export {
  toAbr as
  default
};
