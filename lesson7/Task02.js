const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(arr) {
    const count = arr.length;
    const avg = arr.reduce((num, item) => {
        return num += item
    }, 0);
    return Math.floor(avg/count)
}

console.log(getAverageValue(allСashbox));