const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
        this.skills.forEach(function (skill) {

            console.log(`${this.name} knows ${skill}`)

        }.bind(this)) // argument (object) passed to the bind method, will now become the value of this keyword inside the function
    }
}

developer.details() 