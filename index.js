const oneThousand = 1000;
const oneMillion = Math.pow(1000, 2);
const oneBillion = Math.pow(1000, 3); // billion US = thousands of millions

export const toAbr = (number, digits) => {
  let abr = number;
  let symbol = '';
  switch (true) {
    case (isNaN(number) || number < 0):
      return 0;

    case (number < 1000):
      return number;

    case (number >= 1000 && number < oneMillion):
      abr = number / oneThousand;
      symbol = 'k';
      break;

    case (number >= oneMillion):
      abr = number / oneMillion;
      symbol = 'M';
      break;

    case (number >= oneBillion):
      abr = number / oneBillion;
      symbol = 'B';
      break;

  }

  return `${parseFloat(abr).toFixed(digits)}${symbol}`;
}

//Acept negative 
//export const toAbrWithSignal = () => {}