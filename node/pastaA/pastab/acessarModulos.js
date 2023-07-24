const moduloA = require('/Users/Palombo/Documents/GitHub/Estudos-JS/node/moduloA')
console.log(moduloA.boaNoite())

const saudacao = require('sadaucao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia!')
    res.end()
}).listen(8080)