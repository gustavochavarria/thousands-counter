const SYMBOL_LIST = ['', 'K', 'M', 'B'];
const OPTIONS = {
  digits: 1,
  uppercase: true
};

/**
 * Convert number into human numbers
 *
 * @param {Number} number
 * @param {Object} options
 */
export const toAbr = (number, options = {}) => {
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

  const relevantDecimal = abr - Math.floor(abr);

  const res =
    relevantDecimal <= 0 || digits === 0
      ? Math.floor(abr * sign)
      : parseFloat(abr * sign).toFixed(digits);

  return `${res}${symbol}`;
};

/**
 * Does the opposite of toAbr, takes human friendly number and converts to float
 * Returns 0 if not a human friendly number in expected format
 * @param {Number} number
 * @param {Object} options
 */
export const fromAbr = humanNumber => {
  const regex = /(-)?([\d|.]+)(b|m|k)?$/i;

  const matches = String(humanNumber)
    .replace(',', '')
    .match(regex);
  if (matches !== null) {
    const sign = matches[1];
    const value = parseFloat(matches[2]);
    const suffix = matches[3];
    let multiplier = 1;
    if (suffix) {
      switch (suffix.toLowerCase()) {
        case 'k':
          multiplier = 1000;
          break;
        case 'm':
          multiplier = 1000 ** 2;
          break;
        case 'b':
          multiplier = 1000 ** 3;
          break;
        default:
          multiplier = 1;
          break;
      }
    }

    const num = value * multiplier;
    return sign ? -Math.abs(num) : num;
  }

  return 0;
};
