/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(function(number) {
    if(number % 2 == 0){
        console.log(number)
    }
})