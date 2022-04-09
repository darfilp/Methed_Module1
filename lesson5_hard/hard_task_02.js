const num1 = +prompt('Введите первое число', '');
const num2 = +prompt('Введите второе число', '');


const countMin = (num1, num2) => {
    let num = ((num1 + num2) - Math.abs(num1 - num2))/ 2;
    alert(`Минимальное число ${num}`);
}

countMin(num1, num2)