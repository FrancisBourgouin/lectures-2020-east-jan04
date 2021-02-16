import { useState } from "react"

export default function PlayerForm(props) {
  // const [name, setName] = useState("")
  // const [gamerTag, setGamerTag] = useState("")
  const { addNewPlayer } = props


  const [playerInfo, setPlayerInfo] = useState({
    firstName: "",
    gamerTag: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewPlayer(playerInfo)
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    const buffer = { ...playerInfo }
    buffer[name] = value
    console.log(value, name)
    setPlayerInfo(buffer)

    // setPlayerInfo({ ...playerInfo, [name]: value })
  }

  const updateName = (event) => {
    setPlayerInfo({ ...playerInfo, firstName: event.target.value })
  }
  const updateGamerTag = (event) => {
    setPlayerInfo({ ...playerInfo, gamerTag: event.target.value })
  }


  console.log('re-render')

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Enter your name"
        value={playerInfo.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gamerTag"
        placeholder="Enter your gamerTag"
        value={playerInfo.gamerTag}
        onChange={handleChange}
      />
      <button type="submit">Add new player!</button>
    </form>
  )
}