export default function Header(props) {

  return (
    <header>
      <h1>Super Todo List of Destiny</h1>
      <p>We currently have {props.amount} tasks</p>
      <button onClick={props.wassup}>sup</button>
    </header>
  )
}

// export default Header