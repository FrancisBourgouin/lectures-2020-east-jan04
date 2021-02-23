import { useState } from "react"
import { useHistory } from 'react-router-dom'
export default function LoginForm(props) {
  const history = useHistory()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.handleLogin(user)
    history.push('/')
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={user.email} onChange={handleChange} />
      <input type="password" name="password" value={user.password} onChange={handleChange} />
      <input type="submit" value="login" />
    </form>
  )
}