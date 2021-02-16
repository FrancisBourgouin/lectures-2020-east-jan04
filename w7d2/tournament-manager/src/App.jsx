import { useState } from 'react';
import { players, playersObj } from './players'
import './App.css';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm'

function App() {
  const [value, setValue] = useState(0)
  const [playerData, setPlayerData] = useState(playersObj)
  let bob = 0
  const increment = () => {
    setValue(value + 1)
    bob++
  }

  const addNewPlayer = newPlayer => {
    const player = { ...newPlayer, wins: 0 }
    setPlayerData({ ...playerData, [player.gamerTag]: player })
  }

  const giveAWin = (gamerTag) => {
    const updatedPlayer = { ...playerData[gamerTag] }
    updatedPlayer.wins += 1
    // console.log(playerData)
    // setPlayerData({ ...playerData, [gamerTag]: updatedPlayer })
    setPlayerData(prevState => {
      console.log(prevState)
      return ({ ...prevState, [gamerTag]: updatedPlayer })
    })
  }

  const giveEverybodyAWin = () => {
    const listOfGamerTags = Object.keys(playerData)
    for (const gamerTag of listOfGamerTags) {
      giveAWin(gamerTag)
    }
  }

  return (
    <div className="App">
      <h1>Tournament manager yeaaaah.</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={() => giveAWin('Cadaei')}>Give myself a win</button>
      <button onClick={giveEverybodyAWin}>Everybody wins!</button>
      <PlayerList playerData={Object.values(playerData)} />
      {/* <PlayerList {...{ playerData }} /> */}


      <PlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
}

export default App;
