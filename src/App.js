import React, { useState } from "react";
import ToDoCounter from "./components/ToDoCounter";
import ToDoItem from "./components/ToDoItem";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import CreateToDoButton from "./components/CreateToDoButton";

/* const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Terminar curso Intro React', completed: false },
  { text: 'Usar estados derivados', completed: true },
  { text: 'Colgar la ropa', completed: false }
] */

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageInfo = localStorage.getItem("TODOS_V1");
  console.log(localStorageInfo);
  let parsedTodos;

  if (!localStorageInfo || localStorageInfo ==  false) {
    parsedTodos = [];
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
  } else {
    parsedTodos = JSON.parse(localStorageInfo);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  /* ToDo Counter */
  const completedTodos = todos.filter((todos) => !!todos.completed).length; // La expresión '!!' convierte en booleano la siguiente expression
  const totalTodos = todos.length;

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  /* ToDo Search Bar */
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const inputText = searchValue.toLowerCase();
    return todoText.includes(inputText);
  });

  /* complete ToDo's */
  function toCompleteTodos(text) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  }

  /* deleted ToDo's */
  function toDeleteTodos(text) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }

  return (
    <div className="main-container">
      <ToDoCounter completed={completedTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedTodos.map((todo) => (
          <ToDoItem
            key={
              todo.text
            } /* Cuando trabajamos con arrays es necesario enviar la propiedad 'key' -> fuciona como uid */
            content={todo.text}
            completed={todo.completed}
            onComplete={() => toCompleteTodos(todo.text)}
            onDelete={() => toDeleteTodos(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </div> /* Nos permite crear un contenedor que será invisible dentro del html -> alternativa al div */
  );
}

export default App;
