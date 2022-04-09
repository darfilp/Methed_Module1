{
    const nameProduct = 'Телевизор';
    let countProduct = 21;
    const category = 'Техника'; 
    let price = 21000;

    //console.log(nameProduct);
    //console.log(countProduct * price); 
}

{
    const nameProduct = 'Холодильник';
    let countProduct = 32;
    const category = 'Бытовая техника'; 
    let price = 54000;

    //console.log(nameProduct);
    //console.log(countProduct * price); 
}

{
    const nameProduct = prompt('Введите имя товара', '');
    let countProduct = +prompt('Введите нужное количество', '');
    const category = prompt('Введите категорию', ''); 
    let price = +prompt('Введите цену', '');

    console.log(typeof nameProduct);
    console.log(typeof countProduct);
    console.log(typeof category);
    console.log(typeof price);

    console.log(`На складе ${countProduct} единицы товара "${nameProduct}" на сумму ${price} деревянных`);
}

