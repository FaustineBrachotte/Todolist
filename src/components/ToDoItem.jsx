import Button from './Button';

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
			<Button
				onClick={(e) => {
					e.stopPropagation();
					toggleToDo();
				}}
				className='mr-15'
				text='Valider'
			/>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					editToDo();
				}}
				className='mr-15'
				text='Modifier'
			/>

			<Button
				onClick={(e) => {
					e.stopPropagation();
					deleteToDo();
				}}
				text='Supprimer'
			/>
		</li>
	);
}

export default ToDoItem;
