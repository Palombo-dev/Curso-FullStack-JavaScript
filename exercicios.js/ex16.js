/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

let number1 = 2
let number2 = 2
let operand = '/'

switch(operand)
{
    case '+':
        return console.log(`${ number1 + number2}`)
    case '-':
        return console.log(`${number1 - number2}`)
    case '/':
        return console.log(`${number1 / number2}`)
    case '*':
        return console.log(`${number1 * number2}`)
    default:
        return console.log('Operações invalidas')
}