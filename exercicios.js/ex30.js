/**  Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

let vetor = [1, 0, 2, 3, 4, 5]
let menorNum = 1
let maiorNum = 1
vetor.forEach(function(i) {
    if(i <= menorNum){
        menorNum = i
    } else if ( i >= maiorNum){
        maiorNum = i
    }
})
console.log(`Menor num foi ${menorNum} e o maior foi ${maiorNum}`)