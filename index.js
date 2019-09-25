const oneThousand = 1000;
const oneMillion = Math.pow(1000,2);
const oneBillion = Math.pow(1000,3); // billion US = thousands of millions

export const toAbr = (number, digits) => {
    if(isNaN(number) || number < 0) {
        return 0;
    }

    let abr = number;
    let symbol = '';

    if(number >= 1000 && number < oneMillion) {
        abr = number/oneThousand;
        symbol = 'k';
    }

    if(number >= oneMillion) {
        abr = number/oneMillion;
        symbol = 'M';
    }

    if(number >= oneBillion) {
        abr = number/oneBillion;
        symbol = 'B';
    }

    return `${parseFloat(abr).toFixed(digits)}${symbol}`;
}

//Acept negative 
//export const toAbrWithSignal = () => {}