function generateArray(num, n, m, str) {
    let arr = Array(num).fill(0);
    let a; //делитель

    if (str === 'even') {
        a = 0 //четное
    } 

    if (str === 'odd') {
        a = 1 //четное
    } 

    console.log(a)

    const newArr = arr.map(item => {
        return Math.round(n - 0.5 + Math.random() * (m - n + 1)) 
    }).filter(item=> {
        return item % 2 === a
    })
    console.log(newArr)
};

generateArray(5, 0, 14, 'even') //количество элементов в массиве + диапозон
