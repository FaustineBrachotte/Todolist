import ToDoItem from './ToDoItem';

function ToDoList({ toDoList, deleteToDo, toggleToDo }) {
	return toDoList.length ? (
		<ul>
			{toDoList.map((toDo) => (
				<ToDoItem
					key={toDo.id}
					toDo={toDo}
					deleteToDo={() => deleteToDo(toDo.id)}
					toggleToDo={() => toggleToDo(toDo.id)}
				/>
			))}
		</ul>
	) : (
		<p>Rien à faire pour le moment</p>
	);
}

export default ToDoList;
