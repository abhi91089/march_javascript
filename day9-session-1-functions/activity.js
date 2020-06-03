// create a constructor function - person 
// properties - firstName, lastName, age 
// methods - fullName

function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}


const p1 = new Person('amar', 'kumar', '21')
console.log(p1.fullName()) // 'amar kumar' 
console.log(p1.firstName) // 'amar'
