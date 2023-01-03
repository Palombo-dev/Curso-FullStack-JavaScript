/**
 * 
 */

let salario = 1589
let r100 = salario % 100
let N100 = parseInt(salario / 100)
let N50 = parseInt(r100 / 50)
let r50 = r100 % 50
let N20 = parseInt(r50 / 20)
let r20 = r50 % 20
let N10 = parseInt(r20 / 10)
let r10 = r20 % 10
let N5 = parseInt(r10 / 5)
let r5 = r10 % 5
let N2 = parseInt(r5 / 2)

console.log(`salario de ${salario}`)
console.log(N100 + ' Notas de cem')
console.log(N50 + ' Notas de cinquenta')
console.log(N20 + ' Notas de vinte')
console.log(N10 + ' Notas de dez')
console.log(N5 + ' Notas de cinco')
console.log(N2 + ' Notas de dois')
