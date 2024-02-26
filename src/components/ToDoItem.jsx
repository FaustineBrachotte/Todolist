function ToDoItem({ toDo, deleteToDo, toggleToDo, editToDo, selectToDo }) {
	return (
		<li
			onClick={selectToDo}
			className={`mb-10 d-flex flex-row justify-content align-items p-10 ${
				toDo.selected ? 'selected' : ''
			} `}
		>
			<span className='flex-fill mr-15'>
				{toDo.content} {toDo.done && '(✓)'}
			</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					toggleToDo();
				}}
				className='btn btn-primary mr-15'
			>
				Valider
			</button>
			<button
				onClick={(e) => {
					e.stopPropagation();
					editToDo();
				}}
				className='btn btn-primary mr-15'
			>
				Modifier
			</button>
			<button
				onClick={(e) => {
					e.stopPropagation();
					deleteToDo();
				}}
				className='btn btn-reverse-primary mr-15'
			>
				Supprimer
			</button>
		</li>
	);
}

export default ToDoItem;
