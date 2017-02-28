import Decimal from 'decimal.js';

class Numbers {

    static afterAdd(...numbers) {
        let result = new Decimal(0);

        for (let number of numbers) {
            result = result.add(number);
        }

        return result;
    }

    static formatCurrency(numberString) {
        numberString = numberString.replace(/[^\d\.]/g, '');
        let number = parseFloat(numberString);
        return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

}

export default Numbers;