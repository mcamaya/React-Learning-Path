import './CreateToDoButton.css'
export default function CreateToDoButton(){
    return (
    <button 
        class="button" 
        onClick={(event) => {
            console.log('Le diste click');
            console.log(event.target);
        }}
    >
        Crear ToDo
    </button>
    );
}