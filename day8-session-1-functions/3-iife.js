// iife - immediately invoked function expression 

// 1. you want to invoke a function immediately after declaring it
// 2. you do not want to reuse the function again 

(function(msg){
    console.log("i'm an " + msg)
}('iife'))