import EditToDo from './EditToDo';
import ToDoItem from './ToDoItem';

function ToDoList({
	toDoList,
	deleteToDo,
	toggleToDo,
	toggleToDoEdit,
	editToDo,
}) {
	return toDoList.length ? (
		<ul>
			{toDoList.map((toDo) =>
				toDo.edit ? (
					<EditToDo
						key={toDo.id}
						toDo={toDo}
						editToDo={(content) => editToDo(toDo.id, content)}
						cancelEditToDo={() => toggleToDoEdit(toDo.id)}
					/>
				) : (
					<ToDoItem
						key={toDo.id}
						toDo={toDo}
						deleteToDo={() => deleteToDo(toDo.id)}
						toggleToDo={() => toggleToDo(toDo.id)}
						editToDo={() => toggleToDoEdit(toDo.id)}
					/>
				)
			)}
		</ul>
	) : (
		<p>Rien à faire pour le moment</p>
	);
}

export default ToDoList;
