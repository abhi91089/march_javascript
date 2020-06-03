const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
        // assign this to another variable (_this), use that variable(_this) inside the function, instead of this
        const _this = this
        this.skills.forEach(function(skill){
            console.log(`${_this.name} knows ${skill}`)
        })
    }
}

developer.details() 


// pass by reference - shallow copy
// lexcial scope 