



let car = {
    model:"marcedes",
    make: 1901,
    year:1901,
    start:  function(){
        console.log("the car has started",this.make);
    }
};
console.log(car)
console.log(car.model)
console.log(car.make)
console.log(car.year)

// functionka
car.start()