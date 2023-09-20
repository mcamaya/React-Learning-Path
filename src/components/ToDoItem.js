import "./ToDoItem.css";

function ToDoItem({content}) {
  return (
    <li>
      <span>V</span>
      <p>{content}</p>
      <span>X</span>
    </li>
  );
}


export default ToDoItem;