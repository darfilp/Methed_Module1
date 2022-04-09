const cart = {
    items: [],
    totalPrice: 0, // общая стоимость корзины
    count: 0, // количество товаров
    getTotalPrice() {
        return cart.totalPrice
    },
    add(name, price, count) {
        cart.items.push({name, price, count})
        cart.increaseCount(1);
        cart.getTotalPrice();
        cart.calculateItemPrice();
    },
    increaseCount(i) {
        cart.count = cart.count + i
    },
    calculateItemPrice() {
        cart.totalPrice = cart.items.map(item => {
            return item.price * item.count
        }).reduce((acc, item) => {
            return acc + item
        }, 0)
    },
    clear() {
        cart.items =[];
        cart.totalPrice = 0;
        cart.count = 0;
    },
    print() {
        console.log( JSON.stringify(cart.items))
        console.log(`Общая стомость корзины ${cart.totalPrice}`)
    },
} 

cart.add('Чайник', 3500, 1);
cart.add('Утюг', 2890, 3);
cart.print()
cart.clear() 
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.add('Утюг', 2890, 3);
cart.print()
