// primitive data types, pass by value
let n = 10, m = 20 

function add(n, m) { // parameter = they are like local variables within the function
    console.log(n,m)
    n = 'hello ', m = 'world' 
    console.log(n, m)
    return n + m 
}
console.log(add(n, m)) // 'hello world'
console.log(n, m)// 10, 20 