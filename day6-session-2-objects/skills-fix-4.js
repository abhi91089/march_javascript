const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
        this.skills.forEach((skill) => {
            console.log(`${this.name} knows ${skill}`)
        })
    }
}

developer.details() 