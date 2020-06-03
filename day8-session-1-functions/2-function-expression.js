// console.log(add(2,2))

// function expression
const add = function(a,b){ // anonymous function
    return a + b
}

console.log(add(10,20))

// in js, function are treated as first class citizens
console.log(typeof add) // 'function'