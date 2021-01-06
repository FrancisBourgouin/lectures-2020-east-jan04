const ImAnObject = {}

// key-value pairs

const someList = ["Francis", "Petit Poulet", 34, "Montréal"]

const someObject = {
  name: "Francis",
  nickname: "Petit Poulet",
  age: 34,
  currentCity: "Montréal"
}

const funkyObject = {
  someKey: {
    funkierKey: {
      funky: true
    }
  },
  age: 70
}

// How to access values

someObject.name // dot notation
someObject["name"] // square bracket notation

let superKey = "age"
someObject.superKey

someObject[superKey]
funkyObject[superKey]

funkyObject["someKey"]["funkierKey"]["funky"]
funkyObject.someKey.funkierKey.funky

// When to use Objects & Arrays ?



// Objects, when it's a list of dependent elements

const someFrancisFacts = {
  name: "Francis",
  nickname: "Petit Poulet",
  age: 34,
  currentCity: "Montréal"
}

const chickenFacts = {
  fried: "Very good",
  braised: "Very good",
  boiled: "Very bad"
}

// Arrays, when it is a list of independent elements

const listOfFacts = [someFrancisFacts, chickenFacts]

const listOfNames = ["Bob", "Robert", "Bobby"]

const listOfNames1 = {
  1: "Bob",
  2: "Robert",
  3: "Bobby"
}

const listOfNames2 = {
  0: "Bob",
  1: "Robert",
  2: "Bobby"
}

const objectOfFacts = {
  chicken: chickenFacts,
  francis: someFrancisFacts,
}