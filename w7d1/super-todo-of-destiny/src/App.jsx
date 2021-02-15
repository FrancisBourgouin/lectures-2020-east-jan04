import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import listOfTasks from './todoSource'

function App() {

  return (
    <div className="App">
      <Header amount={listOfTasks.length} />
      <TodoList listOfTasks={listOfTasks} />
      <TodoForm />
    </div>
  );
}

export default App;
