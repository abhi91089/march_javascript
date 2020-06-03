const name = 'dct' // 'string' - primitive
console.log(name) // 'dct'
console.log(name[0]) // 'd'
console.log(name[10]) // undefined

console.log(name.length) // 3
console.log(name.toUpperCase()) // 'DCT'
console.log(name) // 'dct'
console.log(name.toLowerCase()) // 'dct' 

// extracting parts of string - slice & substr 
const city = 'bangalore'
console.log(city.slice(0, 4)) // 'bang'
console.log(city.slice(2, 5)) // 'nga'
console.log(city.slice(5)) // 'lore'
console.log(city.substr(2,3)) // 'nga'

// console.log(name.toCapitalize()) // 'Dct'
console.log(city[0].toUpperCase() + city.slice(1).toLowerCase())
// 'Bangalore'

console.log('hello'.concat(' world')) // 'hello world'

console.log(city.indexOf('a')) // 1
console.log(city.lastIndexOf('a')) // 4 

console.log(city.indexOf('z')) // -1
console.log(city.includes('g')) // true 
console.log(city.includes('y')) // false

// str -> str obj -> properties & methods 


const n = 10
console.log(n.toString()) // '10' 