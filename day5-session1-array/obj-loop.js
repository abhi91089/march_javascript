const product = {
    id: 1,
    name: 'biscuit',
    price: 10
}

// console.log(product.name) // 'biscuit' 
const prop = 'name'
console.log(product.prop) // undefined
console.log(product[prop]) // product['name'] // 'biscuit'

// for in 
for(const key in product) {
    console.log(key, product[key])
}