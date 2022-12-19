function calculadora(num1, num2){
    this.num1 = num1
    this.num2 = num2
    this.operar = function(operacao) {
        switch(operacao) {
            case '+':
                console.log(num1 + num2)
                break;
            case '-':
                console.log(num1 - num2)
                break;
            case '*':
                console.log(num1 * num2)
                break;
            case '/':
                if(num2 == 0) console.log('Não é possivel dividir por zero')
                else console.log(num1 / num2)
                break;
            default:
                console.log('Operacao informada é invalida')
        }
    }
}

const calcular = new calculadora(3, 3)
calcular.operar('*')