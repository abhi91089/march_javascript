// objects & array, pass by reference
const person = {
    name: 'arvind',
    city: 'bangalore'
}

function changeCity(person) {
    console.log('8',person)
    person.city = 'mysore'
    console.log('10',person)
}

console.log('13',person)
changeCity(person)
console.log('15',person)