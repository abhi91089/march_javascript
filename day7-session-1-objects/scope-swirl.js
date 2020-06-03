const msg1 = 'Message One'

function printOne() {
    const msg1 = 'Message Two'
    console.log('inside print one', msg1)
    function printTwo() {
        console.log('inside print two',msg1)
        function printThree() {
            console.log('inside print three', msg1)
        }
        printThree()
    }
    printTwo()
}

printOne()