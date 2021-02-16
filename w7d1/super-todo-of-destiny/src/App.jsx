import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import listOfTasks from './todoSource'

function App() {
  const bob = []

  const wassup = () => {
    console.log(bob)
    bob.push('sup')
  }
  return (
    <div className="App">
      <Header amount={listOfTasks.length} wassup={wassup} />
      {Header({ amout: 5, wassup: wassup })}
      <TodoList listOfTasks={listOfTasks} wassup={wassup} />
      <TodoForm />
    </div>
  );
}

export default App;
