const passar = function(num){
    switch(num){
        case 10: case 9:
            console.log('HUMILHOU')
            break
        case 8: case 7: 
            console.log('Passou')
            break 
        case 6: case 5: 
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log("REPROVADO!")
            break
        }
}

passar(8)