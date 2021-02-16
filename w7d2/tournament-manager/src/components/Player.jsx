export default function Player(props) {
  // {"name":"Galit","gamerTag":"geeLight","wins":0}
  return (
    <article>
      <h1>{props.firstName} <span>{props.gamerTag}</span></h1>
      <p>Currently with {props.wins} wins</p>
    </article>
  )
}