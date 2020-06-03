const superHeroes = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]

function superPower(superHeroes, name) {
    let result = '' 
    for(let i = 0; i < superHeroes.length; i++){
        if(superHeroes[i].name == name) {
            result = superHeroes[i].powers.join(', ')
            break
        }
    }
    if(result) {
        return result
    } else {
        return `${name} not in the list`
    }
}

console.log(superPower(superHeroes, 'Molecule Man'))
// console.log(superPower(superHeroes, 'Iron Man'))