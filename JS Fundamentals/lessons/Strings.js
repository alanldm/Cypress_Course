var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your " + itemName + " is " + price +" dollars" //Concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)