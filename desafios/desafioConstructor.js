function People(name){
    this.speak = function(){
        console.log(`my name is ${name}`)
    }
}
const p1 = new People('rodrigo')
p1.speak()