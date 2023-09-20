import "./ToDoSearch.css";
function ToDoSearch() {
	return (
		<div class="coolinput">
			<label for="input" class="text">Buscar ToDo:</label>
			<input type="text" placeholder="Llorar con la llorona..." name="input" class="input" />
		</div>
	);
}

export default ToDoSearch;