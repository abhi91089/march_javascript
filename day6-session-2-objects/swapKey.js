/*
Function Name: swapKeyAndValue
Numbers of inputs: 2

Write a function called swapKeyAndValue, which accepts an object and a key.

The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

Examples:


swapKeyAndValue(instructor, 'job'); // {name: "Elie", Instructor: 'job'}
*/

const instructor = { name: 'Elie', job: 'Instructor' };

function swapKeyAndValue(obj, prop) {
    const result = {}
    for(const key in obj) {
        if(key == prop) {
            result[obj[key]] = key
        } else {
            result[key] = obj[key]
        }
    }
    return result
}
console.log(swapKeyAndValue(instructor, 'name')); // {Elie: 'name', job: "Instructor"}
console.log(instructor)