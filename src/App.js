import React from 'react';
import ToDoCounter from './components/ToDoCounter';
import ToDoItem from './components/ToDoItem';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import CreateToDoButton from './components/CreateToDoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Terminar curso Intro React', completed: false },
  { text: 'Colgar la ropa', completed: true },
]

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completed={16} total={20} />
      <ToDoSearch />

      <ToDoList>
        {defaultTodos.map(todo => (
          <ToDoItem 
            key={todo.text} /* Cuando trabajamos con arrays es necesario enviar la propiedad 'key' -> fuciona como id */
            content={todo.text} 
            completed={todo.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment> /* Nos permite crear un contenedor que será invisible dentro del html -> alternativa al div */
  );
}

export default App;
