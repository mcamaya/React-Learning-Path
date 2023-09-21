import "./ToDoItem.css";

function ToDoItem({content, completed}) {
  return (
    <li className={`${completed && 'completed'}`}>
      <span><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Check_Mark_CSS_Green.svg/1024px-Check_Mark_CSS_Green.svg.png'} alt="" /></span>
      <p>{content}</p>
      <span><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png'} alt="" /></span>
    </li>
  );
}


export default ToDoItem;