function generator() {
    const range = prompt('Введите 2 числа через запятую. Это диапазон', '0,50').split(',')
    const gen = Math.round(range[0] - 0.5 + Math.random() * (range[1] - range[0] + 1));
    console.log(gen, 'Мое число')
    alert('Я загадала число, попробуй догадайся');
    const numbers = []; //здесь будут загаданные числа
    let trying;//количество попыток
    if (range[0] === 50 && range[1] === 100) {
        trying = 15
    } else {
        trying = Math.trunc((range[1] - range[0]) * 0.3);
    }

    function guessNum() {
        if (trying === 0) {
            alert('Попытки кончились! Давай сначала');
            return
        }

        const num = prompt('Введи свой вариант', '');

        
        const isNumber = (num) => {
            return !isNaN((parseFloat(num) && isFinite(num)))
        }

        const n = numbers.some(item => {
            return +item === +num
        });

        
        if (n === true) {
            alert('Это число вы уже вводили');
            trying++;
        } else {
            if (isNumber(num)) {
            numbers.push(num)
            }
        }

        if (num === null) {
            alert('Пока')
            return
        } 

        if (!isNumber(num)) {
            alert('Введи число')
            guessNum();
        }

        if (num < gen) {
            trying--;
            alert('Число больше')
            guessNum();
        }

        if (num > gen) {
            trying--;
            alert('Число меньше')
            guessNum();
        }

        if (num === gen) {
            alert('Правильно!')
        }

        

    }

    
    guessNum();
}

generator()
