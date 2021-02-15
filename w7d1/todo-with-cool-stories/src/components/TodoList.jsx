import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { listOfTasks } = props
  // const parsedTodos = [
  //   <TodoListItem todoData={listOfTasks[0]} />,
  //   <TodoListItem todoData={listOfTasks[1]} />,
  //   <TodoListItem todoData={listOfTasks[2]} />,
  //   <TodoListItem todoData={listOfTasks[3]} />,
  //   TodoListItem({ todoData: listOfTasks[4] })
  // ]
  // let betterParsedTodos
  // if (Array.isArray(listOfTasks)) {
  //   betterParsedTodos = listOfTasks.map(todoData => <TodoListItem key={todoData.name} todoData={todoData} />)
  // }

  const isArray = Array.isArray(listOfTasks)
  const betterParsedTodos = isArray && listOfTasks.map(todoData => <TodoListItem key={todoData.name} todoData={todoData} />)

  return (
    <ul>
      {betterParsedTodos}
      {betterParsedTodos.length === 0 && <li>Add a todo to the tododododo.</li>}
      {!isArray && <li>Give me a good variable you dum dum.</li>}

    </ul>
  )
}