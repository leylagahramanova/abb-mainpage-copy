const conversion = {
    usd: 0.59,
    eur: 0.52,
    rub: 43.27,
    azn: 1
};
let money1 = document.getElementById('money1');
let money2 = document.getElementById('money2');
let currency1 = document.getElementById('currency1');
let currency2 = document.getElementById('currency2');

function convertCurrency() {
    let money1Value = money1.value;
    let money2Value = money2.value;
    let currency1Value = currency1.value;
    let currency2Value = currency2.value;
    if (!isNaN(money1Value) && money1Value > 0) {
        let valueMoney = money1Value * conversion[currency1Value];
        let result = valueMoney / conversion[currency2Value];
        money2.value = result.toFixed(2);
    } else if (!isNaN(money2Value) && money2Value > 0) {
        let valueMoney = money2Value * conversion[currency2Value];
        let result = valueMoney / conversion[currency1Value];
        money1.value = result.toFixed(2);
    }
    else {
        money2.value = "Invalid input";
    }
}
money1.addEventListener('input', convertCurrency);
money2.addEventListener('input', convertCurrency);

currency1.addEventListener('change', convertCurrency);
currency2.addEventListener('change', convertCurrency);
