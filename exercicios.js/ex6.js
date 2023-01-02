/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

/*O juro simples é uma taxa previamente definida e que incide somente sobre o valor inicial. Por exemplo: Se você emprestar R$1000,00 com uma taxa de 2% ao mês no juro simples, a taxa será sempre 2% de R$1000 ao longo do prazo.*/

function simpleInterest(initial, rate, time){
    let rateForMonth = initial * (rate / 100)
    let lastRate = rateForMonth * time
    let amount = initial + lastRate
    return console.log(`Com investimento de ${initial} sobre juros simples de ${rate}% durante ${time} meses o montante final foi de ${amount.toFixed(2)}`)
}

simpleInterest(1000, 2, 12)

/*Na capitalização composta a taxa de juros incide sempre sobre o montante apurado no período imediatamente anterior, acrescido dos juros não pagos*/

function compoundInterest(initial, rate, time){
    let cont = 0
    let rateConverter = rate / 100
    let amount = initial
    while(cont < time){
        amount += amount * rateConverter
        cont ++
    }
    return console.log(`Com investimento de ${initial} sobre os juros compostos de ${rate}% durante ${time} meses o montante final foi de ${amount.toFixed(2)}`)
}
compoundInterest(1000, 2, 12)