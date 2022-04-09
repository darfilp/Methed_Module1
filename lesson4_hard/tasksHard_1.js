const profit = +prompt('Введите ваш доход', '');

if (profit <= 15000) {
    console.log(`Налог составляет 13%, его сумма ${profit*0.13}`)
} else if (profit > 15000 && profit <= 50000){
    console.log(`Налог составляет 20%, его сумма ${profit*0.2}`)
} else {
    console.log(`Налог составляет 30%, его сумма ${profit*0.3}`)
}