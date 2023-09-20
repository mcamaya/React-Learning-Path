import ToDoCounter from './components/ToDoCounter';
import ToDoItem from './components/ToDoItem';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import CreateToDoButton from './components/CreateToDoButton';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Terminar curso Intro React', completed: false },
  { text: 'Colgar la ropa', completed: true },
]

function App() {
  return (
    <div className='main-container'>
      <ToDoCounter completed={16} total={20} />
      <ToDoSearch />

      <ToDoList>
        {defaultTodos.map(todo => (
          <ToDoItem 
            key={todo.text} /* Cuando trabajamos con arrays es necesario enviar la propiedad 'key' -> fuciona como uid */
            content={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </div> /* Nos permite crear un contenedor que será invisible dentro del html -> alternativa al div */
  );
}

export default App;
