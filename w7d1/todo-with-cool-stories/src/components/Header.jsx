export default function Header(props) {

  return (
    <header>
      <h1>Super Todo List of Destiny</h1>
      <p>We currently have {props.amount} tasks</p>
    </header>
  )
}

// export default Header