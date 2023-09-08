
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['ana', 'carlos', 'pedro'])
})

p
    .then(valor => (valor[0]))
    .then(primeiro => (primeiro[0]))
    .then(letra => console.log(letra))