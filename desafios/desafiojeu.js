//contar quatos dias de vida a pessoa tem, da data de nascença, até hoje, incluindo anos bixessuaisssss
const people = {
    day: 9,
    month: 8,
    year: 2000,
}

const dateNow = {
    day: 22,
    month: 12,
    year: 2022,
}

//calcula numero de anos
const testY = function (a, b){
    let tester = a - b
    return tester //01
    
}

//calcula numero de anos, transforma em dias, 
const testM = function (){
    let age = testY(dateNow.year, people.year)
    let months = age * 12 - people.month + dateNow.month - 1
    return months //02
}

const testD = function(){
    let day = testM() * 30 + (testY(dateNow.year, people.year) * 7) - (testY(dateNow.year, people.year)) + dateNow.day
    return day //03
}
//calcula bisexto e reduz do total
const testB = function(){
    let i = people.year
    let dateB = 0
    while (i <= dateNow.year){
        if( i % 4 == 0){
            dateB ++
            i ++
        } else {
            i++
        }
    }
    return dateB //04
}

console.log(`Você viveu ${testY(dateNow.year, people.year)} Anos;`)
console.log(`Viveu ${testM()} Meses;`)
console.log(`E ainda viveu ${testD() + testB()} Dias.`)

/*
*01 Função que calcula a idade
*02 Função que calcula o mês, pegando a idade vezes 12(numero de meses) menos dois. (menos dois pois logo apos somo apenas os meses vividos do ano de nascença e do ano atual)
*03 função que calcula os meses vividos multiplicados por 30, somando os dias dos anos bixestos e dos meses com 31 dias, e excluindo 1 dos fevereiros não bixestos
*04 função que contabiliza os anos bixessuais
*/