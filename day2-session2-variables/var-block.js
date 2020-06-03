function print() { 
    var msg = 'ola'
    if (true) { 
        // iife - immediately invoked function express
        // use var keyword & provide block scope
        (function(){ // anonymous function - a function without a name
            var msg = 'hello there'
            msg = msg.toUpperCase()
            console.log(msg)
        }())
    }
    return msg
}

console.log(print()) // 'ola'