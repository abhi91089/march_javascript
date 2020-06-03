// object contains properties & methods
const person = {
    id: 1,
    name: 'arun',
    details: function(){
        return `${this.id} - ${this.name}`
    }
}

console.log(person.id) // 1
console.log(person.details) // [Function: details]
console.log(person.details()) 








// function & method 
// function add() {}
// numbers.push(10)

// const prices = [10,20]
// console.log(prices.length)
// console.log(prices.reverse) // [Function: reverse]
// console.log(prices.reverse())