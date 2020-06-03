const players = ['dhoni', 'sachin', 'virat', 'yuvi']
console.log(players.join(' - '))

console.log(players) // ['dhoni', 'sachin', 'virat', 'yuvi']
// console.log(players[0]) // 'dhoni'

// for loop
// initialization; condition; incrementation / decrementation
for(let i = 0; i < players.length; i++) {
    console.log(players[i])
}

// to access every element within an array
// forEach() // 
players.forEach(function(ele){
    console.log(ele)
})