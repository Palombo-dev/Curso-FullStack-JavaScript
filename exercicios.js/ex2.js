/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

function triangle(a, b, c){
    let testTriangle = ''
    if(a == b && b == c){
        testTriangle = 'Equilatero'
    } if(a == b &&  a !=c || a == c && b!== c || b == c && c != a){
        testTriangle = 'Isosceles'
        } if(a != b && b != c && a != c ){
            testTriangle = 'Escaleno'
        }
    console.log(testTriangle)
}

triangle(1, 3, 2)