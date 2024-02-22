const car = {
    carPrice: 122222,
    carName: "BMW",
    color: 'white',
    carModel: 1972,
     start: function(){
        console.log("car has started")
    }
}

// console.log(car.start)

// console.log(car["carName"])

car.start();

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
  };

 const name = person.fullName();
//  console.log(name)

//   console.log(444)


let y = 5
console.log(typeof y)
let x = new Number(5);
console.log(x)