import Player from './Player'

export default function PlayerList(props) {

  const parsedPlayers = props.playerData.map(player => (
    <Player
      name={player.name}
      gamerTag={player.gamerTag}
      wins={player.wins}
    />)
  )

  const coolerParsedPlayers = props.playerData.map(player => <Player key={player.gamerTag} {...player} />)
  return (
    <section>
      {coolerParsedPlayers}
    </section>
  )
}