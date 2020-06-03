let m = [10,20,30]
// new array
// let n = m.slice(0) // returns a new array
let n = [].concat(m) // returns a new array

console.log(m,n) // [10,20,30][10,20,30]
m.push(40)
console.log(m,n) // [10,20,30,40][10,20,30]
