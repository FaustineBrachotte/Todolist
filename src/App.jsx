import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import themeContext from './context/theme';

function App() {
	const [toDoList, setToDoList] = useState([]);

	function addToDo(toDo) {
		setToDoList([...toDoList, toDo]);
	}

	function deleteToDo(_id) {
		setToDoList(toDoList.filter((todo) => todo._id !== _id));
	}

	function toggleToDo(_id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo._id === _id
					? {
							...toDo,
							done: !toDo.done,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: toDo
			)
		);
	}

	function toggleToDoEdit(_id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo._id === _id
					? {
							...toDo,
							edit: !toDo.edit,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: toDo
			)
		);
	}

	function editToDo(_id, content) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo._id === _id
					? {
							...toDo,
							content,
							edit: false,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: toDo
			)
		);
	}

	function selectToDo(_id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo._id === _id
					? { ...toDo, selected: true }
					: { ...toDo, selected: false }
			)
		);
	}

	const [theme, setTheme] = useState('primary');

	function handleChange(e) {
		setTheme(e.target.value);
	}

	return (
		<themeContext.Provider value={theme}>
			<div className='d-flex flex-row justify-content align-item p-20'>
				<div className='card container p-20'>
					<h1 className='mb-20 d-flex flex-row justify-content align-items'>
						<span className='flex-fill'>To do list</span>
						<select value={theme} onChange={handleChange}>
							<option value='primary'>Thème orange</option>
							<option value='secondary'>Thème bleu</option>
						</select>
					</h1>
					<AddToDo addToDo={addToDo} />
					<ToDoList
						toDoList={toDoList}
						deleteToDo={deleteToDo}
						toggleToDo={toggleToDo}
						toggleToDoEdit={toggleToDoEdit}
						editToDo={editToDo}
						selectToDo={selectToDo}
					/>
				</div>
			</div>
		</themeContext.Provider>
	);
}

export default App;
