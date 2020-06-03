/*
    str2Camel('order line items') // 'orderLineItems'
    str2Camel('user account information') // 'userAccountInformation'
*/

function str2Camel(str){
    let result = '' 
    const words = str.split(' ') // ['order', 'line','items']
    result += words[0].toLowerCase()
    for(let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    } 
    return result 
}

console.log(str2Camel('order line items')) // 'orderLineItems'