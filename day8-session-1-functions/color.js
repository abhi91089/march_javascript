function colour_association(colors) {
    const result = [];
    for (let i = 0; i < colors.length; i++) {
        const obj = {}
        obj[colors[i][0]] = colors[i][1];
        result.push(obj);
    }
    return result;
}

console.log(colour_association([["white", "goodness"], ["blue", "tranquility"]]))