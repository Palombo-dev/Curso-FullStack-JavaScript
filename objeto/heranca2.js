Object.prototype.attr0 = '0'
const avo = { attr1:'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340
}

Object.setPrototypeOf(ferrari, carro)
ferrari.acelerar(400)
console.log(ferrari)