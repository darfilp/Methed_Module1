const cart = {
  items: [],
  count: 0, // количество товаров,
  discount: 0,
  add(name, price, count) {
    this.items.push({name, price, count});
    this.increaseCount(1);
  },
  increaseCount(i) {
    this.count += i;
  },
  calculateItemPrice() {
    return this.items.map(item => item.price * item.count)
      .reduce((acc, item) => acc + item, 0) - (this.items.map(item => item.price * item.count)
      .reduce((acc, item) => acc + item, 0) * (this.discount / 100));
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(value) {
    this.calculateItemPrice();
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стомость корзины ${this.totalPrice}`);
  },
  get setDiscount() {
    return this.discount;
  },
  set setDiscount(promocode) {
    if (promocode === "METHED") {
        this.discount = 15;
    } else if (promocode === "NEWYEAR"){
        this.discount = 21;
    }
  }

};


cart.setDiscount = "METHED";
//cart.discount = "NEWYEAR";
console.log(cart.setDiscount)
console.log(cart.discount)



cart.add('Чайник', 3500, 1);
cart.add('Утюг', 2890, 3);
cart.print();
cart.clear();
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.print();
