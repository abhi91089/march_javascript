// outside function
console.log(this) // {}

function print() {
    // inside a function
    console.log(this) // global
}
print()

const person = {
    name: 'arjun',
    details: function(){
        // inside a method 
        console.log(this) // current
    }
}
person.details()