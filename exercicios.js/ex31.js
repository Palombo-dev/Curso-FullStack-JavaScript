/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let numbers = [ 2, 0, -5, -2, 5, 2, 0, -7]
let numNegative = 0
numbers.forEach(function(i){
    if(i < 0){
        numNegative ++
    }
})
console.log(`Esse vetor tem ${numNegative} números negativos`)