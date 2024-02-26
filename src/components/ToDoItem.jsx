function ToDoItem({ toDo, deleteToDo }) {
	return (
		<li className='mb-10 d-flex flex-row justify-content align-items'>
			<span className='flex-fill mr-15'>{toDo.content}</span>
			<button className='btn btn-primary mr-15'>Valider</button>
			<button className='btn btn-primary mr-15'>Modifier</button>
			<button onClick={deleteToDo} className='btn btn-reverse-primary mr-15'>
				Supprimer
			</button>
		</li>
	);
}

export default ToDoItem;
