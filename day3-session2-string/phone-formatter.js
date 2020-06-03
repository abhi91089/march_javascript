function phoneFormatter(str) {
    const first = str.slice(0,3), second = str.slice(3, 6), third = str.slice(6) 
    // string concatenation
    // return '(' + first + ') ' + second + '-' + third
    return `(${first}) ${second}-${third}`
}

console.log(phoneFormatter('5555555555')) // '(555) 555-5555'
console.log(phoneFormatter('1234567890')) // '(123) 456-7890'