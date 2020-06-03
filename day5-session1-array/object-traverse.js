const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

// console.log(user.id)
// console.log(user.name)
// console.log(user.address.city)
// console.log(user.address.geo.lat)
// console.log(user['address']['geo']['lng'])
// console.log(user.company.name)

function userDetails(user) {
    return `${user.id} - ${user.name} - ${user.address.city} (${user.address.geo.lat}, ${user.address.geo.lng}) - ${user.company.name}`
}

console.log(userDetails(user)) 
// '1 - Leanne Graham - Gwenborough (-37.3159, 81.1496 ) - Romaguera-Crona'