const player = {
    firstName: 'sachin',
    lastName: 'tendulkar',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    greet: function(name){
        return `hi ${name}, my name is ${this.firstName}`
    }
}

// create a method called as fullName()
console.log(player.fullName()) // 'sachin tendulkar' 
console.log(player.greet('ani')) // 'hi ani, my name is sachin'