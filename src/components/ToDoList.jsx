import EditToDo from './EditToDo';
import ToDoItem from './ToDoItem';

function ToDoList({
	toDoList,
	deleteToDo,
	toggleToDo,
	toggleToDoEdit,
	editToDo,
	selectToDo,
}) {
	return toDoList.length ? (
		<ul>
			{toDoList.map((toDo) =>
				toDo.edit ? (
					<EditToDo
						key={toDo.__id}
						toDo={toDo}
						editToDo={(content) => editToDo(toDo._id, content)}
						cancelEditToDo={() => toggleToDoEdit(toDo._id)}
					/>
				) : (
					<ToDoItem
						key={toDo.__id}
						toDo={toDo}
						deleteToDo={() => deleteToDo(toDo._id)}
						toggleToDo={() => toggleToDo(toDo._id)}
						editToDo={() => toggleToDoEdit(toDo._id)}
						selectToDo={() => selectToDo(toDo._id)}
					/>
				)
			)}
		</ul>
	) : (
		<p>Rien à faire pour le moment</p>
	);
}

export default ToDoList;
