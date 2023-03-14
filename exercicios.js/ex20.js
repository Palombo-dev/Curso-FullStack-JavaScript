/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/


function calc (valorasacar) {
    let valortotal = 0
    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
   while(valortotal != valorasacar) {
        switch(calcularnota(valorasacar)) {
            case 100:
                notas100++
                valorasacar -= 100
                break
            case 50:
                notas50 ++
                valorasacar -= 50
                break
            case 20:
                notas20 ++
                valorasacar -= 20
                break
            case 10:
                notas10 ++
                valorasacar -= 10
                break
            case 5:
                notas5 ++
                valorasacar -= 5
                break
            case 1:
                notas1 ++
                valorasacar -= 1
                break
        }
   }
   return console.log(`Você recebra ${notas100} notas de 100, ${notas50} notas de 50, ${notas20} notas de 20, ${notas10} notas de 10, ${notas5} notas de 5 e ${notas1} notas de 1.`)
}

function calcularnota (valorasacar) {
    if (valorasacar >= 100) {
        return 100
    } else if (valorasacar >= 50){
        return 50
    } else if (valorasacar >= 20){
        return 20
    } else if (valorasacar >= 10){
        return 10
    } else if (valorasacar >= 5){
        return 5
    } else if (valorasacar >= 1) {
        return 1
    }
}

calc(157)