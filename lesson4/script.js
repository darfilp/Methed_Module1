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
    let countProduct = prompt('Введите нужное количество', '');
    const category = prompt('Введите категорию', ''); 
    let price = prompt('Введите цену', '');


    if (!Number.isFinite(countProduct) && !Number.isNaN(countProduct)) {
        console.log('Вы ввели некорректные данные');
    }

    if (!Number.isFinite(price) && !Number.isNaN(price)) {
        console.log('Вы ввели некорректные данные');
    }

    //console.log(`На складе ${countProduct} единицы товара "${nameProduct}" на сумму ${price} деревянных`);
}

