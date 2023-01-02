/*elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.*/

function calculatorBhask(ax, bx, c){
    let delta = ((bx ** 2) - (4 * ax) * c)
    if(delta < 0){
        return console.log('Delta é negativo')
    } else{
        let bhask1 = (-bx + (Math.sqrt(delta))) / (2 * ax)
        let bhask2 = (-bx - (Math.sqrt(delta))) / (2 * ax)
        return console.log([bhask1, bhask2])
        }
}
calculatorBhask(2, 8, -24)