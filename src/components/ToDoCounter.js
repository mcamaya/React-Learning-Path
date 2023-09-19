/*  inline-styles 

function ToDoCounter({total, completed}) {
	return (
		<h1 style={{
			fontSize: '24px',
			textAlign: 'center',
			margin: 0,
			padding: '48px'
		}}>
			Has completado {completed} de {total} ToDo's
		</h1>
	);
} 
*/

import "./ToDoCounter.css";  // Importamos un archivo css para aplicar estilos

function ToDoCounter({total, completed}) {
	return (
		<h1>
			Has completado {completed} de {total} ToDo's
		</h1>
	);
}

export default ToDoCounter;