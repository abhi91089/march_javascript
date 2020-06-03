// fakeBinary('456123') // '011000'
// fakeBinary('123567') // '000111'

function fakeBinary(str) {
    let result = ''
    for(let i = 0; i < str.length; i++) {
        if(parseInt(str[i]) >= 5) {
            result += '1'
        } else {
            result += '0'
        }
    }
    return result
}

console.log(fakeBinary('456123')) // '011000'