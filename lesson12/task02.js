const gen = (arr) => {
    const gen1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    arr.push(gen1)
    const sum = arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)

    if (sum > 50) {
        return arr
    } else {
        return gen(arr)
    }

}

const sum = gen([]);


console.log(sum.reduce((acc, cur) => {
    return acc + cur
}, 0) + " " +"Сумма для проверки")
console.log(sum + " " + "Сам массив")
