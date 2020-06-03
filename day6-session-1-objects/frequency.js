// build out object dynamically

function frequency(str) {
    const result = {}
    for(let i = 0; i < str.length; i++) {
        if(result.hasOwnProperty(str[i])) {
            result[str[i]] += 1
        } else {
            result[str[i]] = 1
        }
    }
    return result 
}

console.log(frequency('ddcttt')) // { d: 2, c: 1, t: 3 }
console.log(frequency('abcdab')) // { a: 2, b: 3, c: 1, d: 1}