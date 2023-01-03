/**
 * Enquanto n > 10 faca:
 *  resultante <- n % 10
 *  n <- Inteiro(n/10)
 */
let vetor = []
i = ''
let n = Math.floor(Math.random() * 100000)
console.log(n)

function convert(n){
  while(n > 0){
    r = n % 10
    nr = parseInt(n / 10)
    n = nr
    vetor.push(r)
    i = i+r
  }

  vetor = vetor.toString()
  console.log(i)
}
convert(n)





/* Receber um numero aleatorio e inverter ele em numero inteiro*/
/*let rateNumber = Math.floor(Math.random() * 100000)
console.log(rateNumber)
console.log(typeof(rateNumber))
function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) 
    )                 
  }
console.log(reversedNum(Number(rateNumber)))
console.log(typeof(rateNumber))*/