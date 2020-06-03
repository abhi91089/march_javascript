let n = '10', m = 20, a = '11.5', b = '50'

// string to number 
console.log(typeof n) // 'string'
n = parseInt(n) 
console.log(typeof n) // 'number'

console.log(typeof a) // 'string'
console.log(parseInt(a)) // 11
console.log(parseFloat(a)) // 11.5
console.log(parseFloat(b)) // 50
console.log(Number(n)) // 10

// number to string 
console.log('' + m) // '20'
console.log(String(m)) // '20'
