import React from "react";
import "./ToDoSearch.css";

function ToDoSearch() {
	const [searchValue, setSearchValue] = React.useState('');

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