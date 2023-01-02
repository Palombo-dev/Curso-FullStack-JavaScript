function carro(velocidadeMax = 200, delta = 5){
    let velocidadeAtual = 0
     this.acelerar = function(){
        if( velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMax
        }
    }
    this.getvelocidade = function(){
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidade())

const ferrari = new carro(300, 20)
console.log(ferrari.getvelocidade())
ferrari.acelerar()
console.log(ferrari.getvelocidade())