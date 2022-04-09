function nod(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while(y) {
    let num = y;
    y = x % y;
    x = num;
  }
  return x;
}


console.log(nod(12, 13));
console.log(nod(9, 3));