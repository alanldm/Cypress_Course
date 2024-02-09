// Declarative function

function helloOne(){
    console.log('Hello one!')
}

helloOne()

// Anonymus function

var helloTwo = function(){
    console.log('Hello two!')
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}

helloThree()

//It is possible to pass arguments in to functions
function printName(name){
    console.log(name)
}

printName('John')

import { Age } from '../imports/print.js'

Age(5)

//import everything
import * as printer from '../imports/print.js'

printer.Age(10)