/*
    const numbers = []
    numbers.push(10)
    numbers.push(10,20,30)
    numbers.push(10,20,30,40,50)
*/

function add() {
    console.log(arguments, arguments.length) // keyword - object
    for(let i = 0; i < arguments.length; i++) {
        console.log(i, arguments[i])
    }
}

add(10)
add(10,20)
add(10,20,30)

const person = {
    name: 'arvind',
    city: 'bangalore'
}

console.log(person.length) // undefined