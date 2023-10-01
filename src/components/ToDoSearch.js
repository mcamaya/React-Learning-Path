import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {
	// console.log(searchValue);
	return (
		<div className="coolinput">
			<label htmlFor="input" className="text">Buscar ToDo:</label>
			<input 
				type="text" 
				placeholder="Llorar con la llorona..." 
				className="input" 
				value={searchValue}
				onChange={(event) => {
					setSearchValue(event.target.value);
				}}
			/>
		</div>
	);
}

export default ToDoSearch;