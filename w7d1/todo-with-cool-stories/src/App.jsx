import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList listOfTasks={[{ name: "Show off storybook", completed: true }]} />
    </div>
  );
}

export default App;
