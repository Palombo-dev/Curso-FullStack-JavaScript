/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/
let comprar = 'camaro'

switch(comprar)
{
    case 'hatch':
        return console.log('compra evetuada com sucesso')
    case 'sedan':
        return console.log('Tem centerza que não prefere esse modelo?')
    case 'motocicleta':
        return console.log('Tem centerza que não prefere esse modelo?')
    case 'caminhonete':
        return console.log('Tem centerza que não prefere esse modelo?')
    default:
    console.log('Não trabalhamos com esse tipo de automovel aqui')
}