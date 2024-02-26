function ToDoItem({ toDo, deleteToDo, toggleToDo, editToDo }) {
	return (
		<li className='mb-10 d-flex flex-row justify-content align-items'>
			<span className='flex-fill mr-15'>
				{toDo.content} {toDo.done && '(✓)'}
			</span>
			<button onClick={toggleToDo} className='btn btn-primary mr-15'>
				Valider
			</button>
			<button onClick={editToDo} className='btn btn-primary mr-15'>
				Modifier
			</button>
			<button onClick={deleteToDo} className='btn btn-reverse-primary mr-15'>
				Supprimer
			</button>
		</li>
	);
}

export default ToDoItem;
