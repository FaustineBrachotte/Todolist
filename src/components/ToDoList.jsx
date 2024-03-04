import EditToDo from './EditToDo';
import ToDoItem from './ToDoItem';

function ToDoList({ toDoList, deleteToDo, updateToDo }) {
	return toDoList.length ? (
		<ul>
			{toDoList.map((toDo) =>
				toDo.edit ? (
					<EditToDo key={toDo._id} toDo={toDo} updateToDo={updateToDo} />
				) : (
					<ToDoItem
						key={toDo._id}
						toDo={toDo}
						deleteToDo={deleteToDo}
						updateToDo={updateToDo}
					/>
				)
			)}
		</ul>
	) : (
		<p>Rien à faire pour le moment</p>
	);
}

export default ToDoList;
