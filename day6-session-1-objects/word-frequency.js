function wordFrequency(str) {
    const arr = str.split(' ')
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        if (result.hasOwnProperty(arr[i])) {

            result[arr[i]] += 1
        }
        else {
            result[arr[i]] = 1
        }
    }
    return result
}

console.log(wordFrequency('virat virat sachin dhoni sachin rahul'))
// { virat: 2, sachin: 2, dhoni: 1, rahul: 1 }

console.log(wordFrequency('mango mango apple'))
// { mango: 2, apple: 1}