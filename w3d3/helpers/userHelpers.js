const emailExists = (userDatabase, email) => {
  if (userDatabase[email]) {
    return true
  } else {
    return false
  }
}

const passwordMatching = (userDatabase, email, password) => {
  if (userDatabase[email].password === password) {
    return true
  } else {
    return false
  }
}

const fetchUser = (userDatabase, email) => {
  if (userDatabase[email]) {
    return userDatabase[email]
  } else {
    return {}
  }
}

module.exports = { emailExists, passwordMatching, fetchUser }