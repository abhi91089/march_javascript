// find count of vowels in a string 
const city = 'bangalore'
function vowelCount(str) {
    const vowels = 'aeiou'
    let count = 0 
    for(const char of str) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count
}
console.log(vowelCount(city)) // 4
