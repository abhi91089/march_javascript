// outside the function - {}
// inside the function (es5) - global

console.log(this) // {}
// arrow functions donot have a value for the this keyword of their known
// the value of the this keyword, will be the value of the this keyword outside the function ( outer scope)
const print = () => {
    console.log(this) // {}
}

print()
const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function(){ 
        // this - current object
        this.skills.forEach((skill) => {
            // this 
            console.log(`${this.name} knows ${skill}`)
        })
    }
}

developer.details() 