/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

let codigo = 300
let number = 2

switch(codigo)
{
    case 100:
        return console.log(`O valor a ser pago será ${3 * number},00 por ${number} cachorros quentes`)
    case 200:
        return console.log(`O valor a ser pago será ${4 * number},00 por ${number}`)
    case 300:
        return console.log(`O valor a ser pago será ${5.50 * number} por ${number}`)
    case 400:
        return console.log(`O valor a ser pago será ${7.50 * number},00 por ${number}`)
    case 500:
        return console.log(`O valor a ser pago será ${3.5 * number},00 por ${number}`)
    case 600:
        return console.log(`O valor a ser pago será ${2.8 * number},00 por ${number}`)
    default:
        return console.log(`Este produto não existe`)
}
