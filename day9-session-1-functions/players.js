const virat = {
    name: 'virat',
    runs: [40,60,50],
    details: `${this.name} has played in ${this.runs.length} matches`,
    calcAvg: function(){
        let total = 0 
        this.runs.forEach(function(run){
            total += run
        })
        return total / this.runs.length 
    }
}

console.log(virat.calcAvg())

const dhoni = {
    name: 'dhoni',
    runs: [30,30,30], 
    details: `${this.name} has played in ${this.runs.length} matches`,
    calcAvg: function () {
        let total = 0
        this.runs.forEach(function (run) {
            total += run
        })
        return total / this.runs.length
    }
}
console.log(dhoni.calcAvg())

const sachin = {
    name: 'sachin',
    runs: [40,60,100], 
    details: `${this.name} has played in ${this.runs.length} matches`,
    calcAvg: function () {
        let total = 0
        this.runs.forEach(function (run) {
            total += run
        })
        return total / this.runs.length
    }
}

console.log(sachin.calcAvg())