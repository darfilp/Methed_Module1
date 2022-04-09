function calculate(sum, count, promo) {
    let total = 0;

    if (count > 10) {
        total = sum * 0.03;
    } 

    if (sum > 30000) {
        total += (sum - 30000) * 0.15
    } 

    if (promo === 'METHED') {
        total += sum * 0.1;
    }

    if (promo === 'G3H2Z1' && (sum - total) > 2000) {
        total = total + 500;
    }

    console.log(`Итоговая сумма покупок с применением всех скидок ${sum - total}`)
};

calculate(35000, 32, 'G3H2Z1');

