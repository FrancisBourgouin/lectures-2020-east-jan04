// Classes in Javascript

// Class vs Object ??

// Blueprint to build objects

class Car {
  constructor(color) {
    this.color = color
  }

  acceleratle = function () {
    console.log(`The ${this.color} car is accelerating`)
  }

}

class SportsCar extends Car {
  constructor(color) {
    super(color)
  }
}
const ae86 = new Car('red')
const ferrari = new SportsCar('yellow')
// console.log(ae86)
ae86.acceleratle()
console.log(ferrari)