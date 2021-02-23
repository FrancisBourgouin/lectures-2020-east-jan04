import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import LoginForm from './components/LoginForm'
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = user => {
    axios
      .post('/api/login', { ...user })
      .then(res => setCurrentUser(res.data))

  }

  useEffect(() => {
    axios
      .post('/api/authenticate')
      .then(res => setCurrentUser(res.data))
  }, [])


  return (
    <Router>
      <div className="App">
        <header>
          <h1>Super cool app with routing yay!</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/register" >Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">about</Link>
          </nav>
        </header>
        <main>
          <h2>Some content here</h2>
          {/* {viewMode === "home" && <p>You are home!</p>}
        {viewMode === "register" && <p>You are register!</p>} */}
          <Switch>
            <Route path="/register">
              <LoginForm handleLogin={handleLogin} />
            </Route>
            <Route path="/login">
              <p>You are in login</p>
            </Route>
            <Route path="/about">
              <p>You are in about</p>
            </Route>
            <Route path="/">
              <p>You are in home</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
