import User from '../hooks/userContext'
import { useContext } from 'react'

export default function SingleFooterButton(props) {
  const { user, setUser } = useContext(User)
  return (
    <button onClick={() => setUser(null)}>{user && `Logged in as {user}.`} Logout?</button>
  )
}