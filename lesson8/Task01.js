function generateArray(num) {
    let arr = Array(num).fill(0)
    const newArr = arr.map(item => {
        return Math.trunc(Math.random() * 10 + 1) 
    })
    console.log(newArr)
};

generateArray(5) //количество элементов в массиве
