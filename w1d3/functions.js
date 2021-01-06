// Functions modifying objects & primitives

const someFunction = function () {
  return "Yay!"
}

const someOtherFunction = someFunction

someOtherFunction()

const someObject = {
  name: "Ali"
}

const changeTheNameToThePersonThatAskedTheQuestionLast = function (newName) {
  someObject.name = newName
}

changeTheNameToThePersonThatAskedTheQuestionLast("Galit")

const changeTheName = function (newName, objectToChange) {
  const newObject = objectToChange
  newObject.name = newName
}

changeTheName("Ikhlas", someObject)

console.log(someObject)
