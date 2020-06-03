const counter = {
    count: 0,
    getCount: function(){
        return this.count 
    },
    up: function(){
        this.count += 1
        return this.getCount()
    },
    down: function(){
        this.count -= 1
        return this.getCount()
    },
    incrementBy: function(val){
        this.count += val
        return this.getCount()
    },
    reset: function(){
        this.count = 0 
        return this.getCount()
    }
}

console.log(counter.getCount()) // 0
console.log(counter.up()) // 1
console.log(counter.getCount()) // 1
console.log(counter.down()) // 0
console.log(counter.getCount()) // 0
console.log(counter.incrementBy(10)) // 10
console.log(counter.getCount()) // 10

console.log(counter.reset()) // 0 
console.log(counter.getCount()) // 0
