import EditToDo from './EditToDo';
import ToDoItem from './ToDoItem';

function ToDoList({ toDoList, deleteToDo, updateToDo, selectToDo }) {
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
