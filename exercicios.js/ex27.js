/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida*/

function calcularCrescimento (altura1, taxa1, altura2, taxa2){
    if( altura1 == altura2){
        if(taxa1 < taxa2){
            console.log('a criança 2 passara a 1 em 1 ano')
        } else if (taxa1 > taxa2){
            console.log('a criança 1 passara a 2 em 1 ano')
        } else{
            console.log('as crianças tem a mesma altura e crescimento')
        }
    } else {
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                console.log('a criança menor não ultrapassará')
            } else{
            console.log(`a criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`)
            }
        } else {
            if(taxa2 >= taxa1){
            console.log('a criança menor não ultrapassará a maior')
            } else{
            console.log(`a criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`)
            }
        }
    }
}
function calcularTempo(alturaMaior, taxaMaior, alturaMenor, taxaMenor){
    let qtdAnos = 0
    while(alturaMenor < alturaMaior) {
    alturaMenor += taxaMenor
    alturaMaior += taxaMaior
    qtdAnos ++
    }

    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));