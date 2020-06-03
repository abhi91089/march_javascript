// collection - tables - collections - array
// CRUD
// create - read - update - delete

const players = ['sachin','shewag', 'rahul']
console.log(players.length) // 3

console.log(players[5]) // undefined
console.log(players[0]) // 'sachin'
// access the last element within the array
console.log(players[players.length - 1]) // 'rahul'

// push method used to add element/s to the end of the array
// returns the new length of the array
console.log(players.push('dhoni')) // 4
console.log(players) // 

// unshift method used to add element/s to the beginning of the array
// reutrns the new length of the array
console.log(players.unshift('saurav')) // 5
console.log(players)

// remove element from the end of the array
// returns the removed element
console.log(players.pop())
console.log(players)

// remove element from the beginning of the array
// returns the removed element
console.log(players.shift())
console.log(players)

const fruits = ['apple', 'mango', 'kiwi','banana']
console.log(fruits)
// remove element/s from a given index 
// returns an array of removed element/s
console.log(fruits.splice(1,1)) // ['mango']
console.log(fruits)

// add element/s to a given index
// when deleteCount (2 arg) is 0, it returns []
console.log(fruits.splice(1, 0, 'water melon')) 
console.log(fruits)

fruits[1] = 'musk melon' 
console.log(fruits)

// re assign - re declare
// players = ['mark', 'steve']
// const players = ['mark']