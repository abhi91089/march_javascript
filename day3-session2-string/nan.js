// NaN - not a number 
console.log(10 / 'a') // NaN 
const result = 10 / 'a'
console.log(result)
console.log(typeof result) // 'number' 
console.log(10 == 10) // true 
console.log(result == NaN) // false 
console.log(Number.isNaN(result)) // true 

console.log(parseInt(true)) // NaN
console.log(parseInt('a')) // NaN