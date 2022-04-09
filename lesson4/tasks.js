const rain = Math.round(Math.random());

console.log(rain);

if(rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!');
}


const math = +prompt('Введите кол-во баллов по математике', '');
const rus = +prompt('Введите кол-во баллов по русскому языку', '');
const inf = +prompt('Введите кол-во баллов по информатике', '');

if (math + rus + inf >= 265) {
    alert('Поздравляю, вы поступили на бюджет!')
} else {
    alert('Вы не поступили')
}

const sum = +prompt('Сколько денег вы хотите снять?');

if (sum % 100 === 0) {
    alert('Банкомат выдаст сумму')
} else {
    alert('Банкомат не выдаст сумму')
}