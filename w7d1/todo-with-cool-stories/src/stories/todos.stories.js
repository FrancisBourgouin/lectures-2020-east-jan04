import { storiesOf } from '@storybook/react';

import TodoListItem from '../components/TodoListItem'
import TodoList from '../components/TodoList'

const completeTodo = {
  name: "Feed with fish",
  completed: true
}

const incompleteTodo = {
  name: "Sleep with fishes",
  completed: false
}

storiesOf('TodoList Item', module)
  .add('Completed todo', () => <TodoListItem todoData={completeTodo} />)
  .add('Incomplete todo', () => <TodoListItem todoData={incompleteTodo} />)


storiesOf('TodoList', module)
  .add('Empty TodoList', () => <TodoList listOfTasks={[]} />)
  .add('Variable-less TodoList', () => <TodoList />)
  .add('Populated TodoList', () => <TodoList listOfTasks={[completeTodo, incompleteTodo]} />)