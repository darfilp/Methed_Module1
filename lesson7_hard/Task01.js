const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

function getAveragePriceGoods(arr) {
  const a = [];
  
  const newArr = arr.map((item) => {
    for (const keys in item) {
      let num = Math.trunc(item[1] / item[0])
      a.push(num)
    }
  });

  const len = a.length;

  const sol = a.reduce((sum, item) => {
    sum += item
    return sum
  }, 0);

  console.log(Math.trunc(sol /len) )
}

getAveragePriceGoods(allСashbox)