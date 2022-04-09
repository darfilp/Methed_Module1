'use strict';

const cart = {
  items: [],
  count: 0, // количество товаров
  add(name, price, count) {
    cart.items.push({name, price, count});
    cart.increaseCount(1);
  },
  increaseCount(i) {
    cart.count += i;
  },
  calculateItemPrice() {
    return cart.items.map(item => item.price * item.count)
      .reduce((acc, item) => acc + item, 0);
  },
  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },
  get totalPrice() {
    return cart.calculateItemPrice();
  },
  set totalPrice(value) {
    this.calculateItemPrice();
  },
  print() {
    console.log(JSON.stringify(cart.items));
    //cart.totalPrice = 10; проверка
    console.log(`Общая стомость корзины ${cart.totalPrice}`);
  },


};

cart.add('Чайник', 3500, 1);
cart.add('Утюг', 2890, 3);
cart.print();
cart.clear();
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.print();
