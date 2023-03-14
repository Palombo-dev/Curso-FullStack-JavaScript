/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações*/

let numbers = [ 5, 6, 7, 8, 9, 10, 12, 15, 18, 20, 25]
let inter = 0
let fora = 0
for (i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 10 && numbers[i] <= 20){
        inter ++
    } else {
        fora ++
        }
}
console.log(`Temos ${inter} fora e ${fora} fora`)