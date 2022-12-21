const people = {
    salutation: "Bom dia",
    speak(){
        console.log(people.salutation)
    }
}
people.speak()
const speak = people.speak
speak()

const speak3 = people.speak.bind(people)
speak3()
