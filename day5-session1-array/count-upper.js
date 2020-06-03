const values =['IndiA', 'FighTs', 'CoRona']

function countUpper(values) {
    let result = 0 
    for(const word of values) {
        for(const letter of word) {
            if(letter == letter.toUpperCase()) {
                result++
            }
        }
    }
    return result
}

console.log(countUpper(values)) // 6