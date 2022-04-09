const gen = Math.round(0 - 0.5 + Math.random() * (100 - 0 + 1));
console.log(gen, 'Мое число')
alert('Я загадала число, попробуй догадайся');

function guessNum() {
    const isNumber = (num) => {
        return !isNaN((parseFloat(num) && isFinite(num)))
    }

    const num = prompt('Введи свой вариант', '');
    
    
    if (num === null) {
        alert('Пока')
        return
    } 

    if (!isNumber(num)) {
        alert('Введи число')
        guessNum();
    }

    if (num < gen) {
        alert('Число больше')
        guessNum();
    }

    if (num > gen) {
        alert('Число меньше')
        guessNum();
    }

    if (num === gen) {
        alert('Правильно!')
    }
}

guessNum();