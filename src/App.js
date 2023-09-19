import './App.css';
import ToDoCounter from './components/ToDoCounter';
import ToDoItem from './components/ToDoItem';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import CreateToDoButton from './components/CreateToDoButton';

function App() {
  return (
    <div className="App">
      
    <ToDoCounter />
    <ToDoSearch />

    <ToDoList>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ToDoList>

    <CreateToDoButton />
    </div>
  );
}

export default App;
