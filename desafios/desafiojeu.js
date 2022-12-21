//contar quatos dias de vida a pessoa tem, da data de nascença, até hoje, incluindo anos bixessuaisssss
let day = 21
let month = 12
let year = 2022
let yearPeople = 2003
let monthPeople = 7
let dayPeople = 12
let yearDay = 365
let yearNow = year - yearPeople
let dayNow = 30 - dayPeople
let monthNow = 12 - monthPeople
let dayForMonth = monthNow * 30 + dayNow
let dayForYear = yearNow * yearDay - yearDay * 2
console.log(dayForMonth)