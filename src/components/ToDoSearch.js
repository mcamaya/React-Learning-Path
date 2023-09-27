import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {
	// console.log(searchValue);
	return (
		<div class="coolinput">
			<label for="input" class="text">Buscar ToDo:</label>
			<input 
				type="text" 
				placeholder="Llorar con la llorona..." 
				class="input" 
				value={searchValue}
				onChange={(event) => {
					setSearchValue(event.target.value);
				}}
			/>
		</div>
	);
}

export default ToDoSearch;