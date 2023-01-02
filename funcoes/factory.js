const listProduct = function(name, price, discount = 0.1){
    return {
        name,
        price,
        discount
    }
}
console.log(listProduct('celular', 1800))
console.log(listProduct('camisa', 60, 0.05))