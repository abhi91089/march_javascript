

// let result = ''
// console.log(result)

// result = result + city[0] // 'b'
// result = result + city[1] // 'ba'
// result = result + city[2] // 'ban'
// console.log(result)

// let result = '' 
// result = city[0] + result // 'b' + '' = 'b' 
// result = city[1] + result // 'a' + 'b' = 'ab' 
// result = city[2] + result // 'n' + 'ab' = 'nab'

const city = 'bangalore'

for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}

// reverse a string without builtin methods 
function reverseStr(str) {
    let result = '' 
    for(let i = 0; i < str.length; i++) {
        result = str[i] + result 
    }
    return result 
}
console.log(reverseStr(city)) // 'erolagnab'