// var function scoped
function print() { // function scope
    console.log(msg) // undefined
    if(true) { // block scope - conditions, loops, try catch
        var msg = 'hello there'
    }
    return msg 
}

console.log(print()) // 'hello there'

// let & const  block scoped
// function print() { // function scope
//     if (true) { // block scope - conditions, loops, try catch
//         const msg = 'hello there'
//     }
//     // ReferenceError: msg is not defined
//     return msg
// }
// console.log(print()) 