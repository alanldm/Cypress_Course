for(let i=0; i<5; i++){
    console.log(i)
}

cars = ["Volvo", "Toyota", "Tesla"]

for(let car of cars){
    console.log(car)
    if(car === "Toyota"){
        break
    }
}

//ES6 Syntax for each loop
cars.forEach(element => {
    console.log(element)
});