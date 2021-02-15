import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { listOfTasks } = props
  const parsedTodos = [
    <TodoListItem todoData={listOfTasks[0]} />,
    <TodoListItem todoData={listOfTasks[1]} />,
    <TodoListItem todoData={listOfTasks[2]} />,
    <TodoListItem todoData={listOfTasks[3]} />,
    TodoListItem({ todoData: listOfTasks[4] })
  ]
  const betterParsedTodos = listOfTasks.map(todoData => <TodoListItem key={todoData.name} todoData={todoData} />)
  return (
    <ul>
      {betterParsedTodos}
    </ul>
  )
}