// find the number of times each of the vowel in string
function eachVowel(str) {
    const result = { a: 0, e: 0, i: 0, o: 0, u: 0}
    for(let i = 0; i < str.length; i++){
        if(result.hasOwnProperty(str[i])) { // Object.keys(result).includes(str[i])
            result[str[i]] += 1
        }
    }
    return result
}

// console.log(eachVowel('')) // { a: 0, e: 0, i: 0, o: 0, u: 0}
console.log(eachVowel('bangalore')) // { a: 2, e: 1, i: 0, o: 1, u: 0}
