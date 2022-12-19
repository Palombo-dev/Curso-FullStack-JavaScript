function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1, 2)
imprimirSoma(3, -1)
imprimirSoma(3)

const soma = function (a, b){
    return (a + b)
}

console.log(soma(2, 3)) // função dentro da constant

const soma2 = (a, b) => { // uma função na variavel arrow
    return a + b
}
console.log(soma2(3, 1))

const soma3 = (a, b) => a + b //retorna isplicitamente
console.log(soma3(2, 1))