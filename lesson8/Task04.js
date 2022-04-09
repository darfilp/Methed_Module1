function algorithmLeapYear(n, m) {
    const num = m - n;

    let arr = [];

    for (let i = n; i <= m; i++) {
        arr.push(i)
    }

    const newArr = arr.filter(item => {
        return item % 4 === 0 || item % 100 === 0 && item % 400 === 0
    })

    console.log(newArr.length)
};

algorithmLeapYear(2000, 2100);
