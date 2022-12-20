//tentando usar o destructuor

let pessoa = { 
    nome : 'Rodrigo',
    idade: 3
}

console.log(pessoa)
let {nome, idade} = pessoa
pessoa.nome = "Jeu"
console.log(nome)
console.log(pessoa)
console.log(pessoa.nome)