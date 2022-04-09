function isPrime(num) {
    const massiv = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            massiv.push(i)
        }
    }
    if (massiv.length === 2) {
        return true
    } else {
        return false
    }
};

console.log(isPrime(1987))