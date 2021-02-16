// Immutable, mutable
// const vs let ?

const startingAmountOfSnow = 15
// startingAmountOfSnow = 10

const someList = ["I", "AM", "A", "POTATO"]

// console.log(someList.pop())
// console.log(someList.pop())
// console.log(someList.pop())

console.log(someList)

const copyOfTheList = someList
copyOfTheList.pop()

console.log(someList)

// ([...someList]).pop()

const purePop = array => {
  const buffer = [...array]
  return buffer.pop()
}

// purePop(someList)


const originalArray = [1, 2, 3, 4, 5, 6]

let newArray = [...originalArray]
newArray = [...newArray, 7]
newArray = [...newArray, 8]
newArray = [...newArray, 9]
newArray = [...newArray, 10]
newArray = [...newArray, 11]
newArray = [...newArray, 12]

console.log(newArray)