var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const userDatabaseish = {
  "bob@bob.com": {
    email: "bob@bob.com",
    password: "1234"
  }
}
app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  console.log('Hello', req.body)
  if (userDatabaseish[email] && userDatabaseish[email].password === password) {
    res.cookie('email', email)
    res.json(userDatabaseish[email])
  }
  else {
    res.json({ err: "Bad person" })
  }
})
app.post('/api/register', (req, res) => {
  const { email, password } = req.body
  userDatabaseish[email] = { email, password }

  res.cookie('email', email)
  res.json(userDatabaseish[email])
})
app.post('/api/logout', (req, res) => {
  res.clearCookie('email')
  res.json({ msg: 'Cookie erased' })
})
app.get('/api/answer', (req, res) => {
  if (req.cookies.email) {
    res.json({ answer: "I like potatoes" })
  } else {
    res.json({ answer: "secret" })

  }
})

app.post('/api/authenticate', (req, res) => {
  const email = req.cookies.email

  if (email) {
    res.json(userDatabaseish[email])
  } else {
    res.json(null)
  }
})


module.exports = app;
