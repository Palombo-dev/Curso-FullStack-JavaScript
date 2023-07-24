const nums =  [ 1, 2, 3, 4, 5]

let resultado = nums.map( function(e){
    return e * 2
})


const soma10 = e => e + 10

resultado = nums.map(soma10)
console.log(resultado)