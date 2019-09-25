const formaters = {};

const numberFormat = (number, digits) => {
    if(!formaters[digits]) {
        formaters[digits] = new Intl.NumberFormat('en-US', { maximumFractionDigits: digits});
    }

    return formaters[digits].format(number);
}

const oneThousand = 1000;
const oneMillion = oneThousand * oneThousand;
const oneBillion = oneThousand * oneMillion; // billion US = thousands of millions

export const toAbr = (num, digits) => {
    if(isNaN(num)) {
        return 0;
    }

    let abr = 0;
    let symbol = '';
    const number = Math.abs(num);

    if(number < 1000) {
        abr = number;
    }

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

    return `${numberFormat(abr, digits)}${symbol}`;
}

//Acept negative 
//toAbrWithSignal 