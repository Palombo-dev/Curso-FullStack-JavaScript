/*1) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos
de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130*/

let amountToBePaid = 100

function test(age)
{
    if (age < 10)
    {
        age = age
    } else if( age >= 10 & age <= 30)
        {
            age = 10
        } else if ( age > 30 & age <= 60)
            {
                age = 60
            } else if ( age > 60)
                {
                    age = 65
                }
    switch(age)
    {
        case 10:
            amountToBePaid += 50
            return console.log(amountToBePaid)
        case 60:
            amountToBePaid += 95
            return console.log(amountToBePaid)
        case 65:
            amountToBePaid += 130
            return console.log(amountToBePaid)
        default:
            amountToBePaid += 80
            return console.log(amountToBePaid)
    }
}

test(62)