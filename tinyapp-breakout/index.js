const express = require("express");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const bodyParser = require("body-parser");
const { emailExists, passwordMatching, fetchUser } = require('./helpers/userHelpers')
const app = express();
const port = 3000;

app.use(cookieParser()) // Parses the cookie string in an object
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object
app.use(cookieSession({
  name: 'session',
  keys: ['Ilikepotatoestheyarethebest', 'sweetpotatoestastebad,fightme']
}))

app.set("view engine", "ejs"); //

const userDatabaseIsh = {
  "pollo@pockpock.com": {
    name: "Pequeño Pollo de la Pampa",
    email: "pollo@pockpock.com",
    password: "salsa verde"
  },
  "periodic@table.com": {
    name: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: "molecule"
  }
}

const urls = {
  urlid1: {
    url: ""
  },
  urlid1: {
    url: ""
  },
}

app.get("/", (req, res) => {
  // (it's home, shows the first part of the joke if logged out)
  // (it's home, shows the second part if logged in)
  console.log(req.headers.cookie)
  console.log(req.session)
  const currentDate = new Date()
  const isLoggedIn = req.session.email ? true : false
  const userObj = fetchUser(userDatabaseIsh, req.session.email)
  // let isLoggedIn
  // if(req.session.email){
  //   isLoggedIn = true
  // } else {
  //   isLoggedIn = false
  // }
  const templateVars = {
    date: currentDate.toLocaleString(),
    isLoggedIn,
    userObj,
    email: userObj.email
  }
  res.render("index", templateVars);
});

app.get("/login", (req, res) => {
  // (will show a form to login)
  // if(req.session.email){
  const templateVars = { error: null }
  res.render("login", templateVars)
  // } else {
  //   res.redirect('/login')
  // }
})

app.post("/login", (req, res) => { // (will authenticate the form information)
  const incomingEmail = req.body.email
  const incomingPassword = req.body.password
  // if the email coming in from the form is the same as pollo@pockpock.com, then it's a valid user
  if (emailExists(userDatabaseIsh, incomingEmail)) {
    if (passwordMatching(userDatabaseIsh, incomingEmail, incomingPassword)) {
      console.log('YAY!')
      // res.cookie('email', incomingEmail)
      req.session.email = incomingEmail
      res.redirect("/")
    } else {
      console.log('BAD PASSWORD')
      // res.status(403).redirect("/login")
      const templateVars = { error: "Bad username or password" }
      res.render("login", templateVars)

    }
  } else {
    console.log('BAD EMAIL')
    const templateVars = { error: "Bad username or password" }
    res.render("login", templateVars)
    // res.redirect(401, '/login')
  }
})

app.post("/logout", (req, res) => {
  // (will permit us to logout)
  // res.clearCookie('email')
  delete req.session.email
  res.redirect("/")
})

app.get("/register", (req, res) => {
  // (will show a form to login)
  res.render("register")
})

app.post("/register", (req, res) => {
  const incomingEmail = req.body.email
  const incomingPassword = req.body.password
  const incomingName = req.body.name

  // We should check if email exists
  if (emailExists(userDatabaseIsh, incomingEmail)) {
    console.log("email already exists")
    res.redirect('/register')
  } else {
    // If not, we want to add the new user data to the databaseish
    const newUser = {
      name: incomingName,
      email: incomingEmail,
      password: incomingPassword
    }

    userDatabaseIsh[incomingEmail] = newUser

    // redirect them to home with cookie if everything was ok
    // res.cookie(incomingEmail)
    // res.redirect('/')

    // redirect them to login if everything was ok
    console.log(userDatabaseIsh)
    res.redirect('/login')
  }
})

app.listen(port, () => console.log(`Express server running on port ${port}`));
