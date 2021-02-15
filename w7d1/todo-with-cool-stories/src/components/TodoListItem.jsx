export default function TodoListItem(props) {
  const { todoData } = props
  return (
    <li>
      <span>{todoData.name}</span>
      {!todoData.completed && <button>Complete!</button>}
      {todoData.completed && <button>Uncomplete!</button>}
    </li>
  )
}