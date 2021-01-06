// Object methods

const objectOfDestiny = {
  answer: 42,
  someProperty: this.answer * 2,

  question: function () {
    console.log(this)
    console.log("We don't know what the question is...!")
    console.log("But we know the answer, and it is: " + this.answer)
  },

  arrowFunction: () => {
    console.log(this)
  }
}

// objectOfDestiny["question"]()

// objectOfDestiny.question()
objectOfDestiny.arrowFunction()

const someRandomFunction = function () {
  console.log(this)
}

