// Object [] vs .

// Declaring an object, and declaring a key name with the value "Ali" and then give the reference to 
// the constant called someObject

const someObject = {
  name: "Ali"
}

// assigning the reference stored inside someObject to the constant called anotherObject

const anotherObject = someObject

// Changing the property called lastName of the object referenced by anotherObject with the value "Bas"

anotherObject.lastName = "Bas"


const newNewObject = {}

newNewObject.name = anotherObject.name
newNewObject.lastName = anotherObject.lastName

for (const key in anotherObject) {
  newNewObject[key] = anotherObject[key]
}

newNewObject = { ...anotherObject }

newNewObject.middleName = "Ayayaye."

console.log(anotherObject)
console.log(someObject)
console.log(newNewObject)


const prices = {
  bacon: 1,
  chicken: 2,
  tofu: 0.5
}

const pricesForOntario = { ...prices }

pricesForOntario.bacon = 1.5

const pricesForQuebec = prices


const bob = {
  a: {
    a: 1
  }
}

const newBob = { ...bob }

newBob.a.a = 5