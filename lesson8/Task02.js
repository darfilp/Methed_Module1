function generateArray(num, n, m) {
    let arr = Array(num).fill(0)
    const newArr = arr.map(item => {
        return Math.round(n - 0.5 + Math.random() * (m - n + 1)) 
    })
    console.log(newArr)
};

generateArray(5, 0, 14) //количество элементов в массиве + диапозон
