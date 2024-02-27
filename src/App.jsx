import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import themeContext from './context/theme';

function App() {
	const [toDoList, setToDoList] = useState([]);

	function addToDo(content) {
		const toDo = {
			id: crypto.randomUUID(),
			content,
			done: false,
			edit: false,
			selected: false,
		};
		setToDoList([...toDoList, toDo]);
	}

	function deleteToDo(id) {
		setToDoList(toDoList.filter((todo) => todo.id !== id));
	}

	function toggleToDo(id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo.id === id
					? {
							...toDo,
							done: !toDo.done,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: toDo
			)
		);
	}

	function toggleToDoEdit(id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo.id === id
					? {
							...toDo,
							edit: !toDo.edit,
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: toDo
			)
		);
	}

	function editToDo(id, content) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo.id === id
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

	function selectToDo(id) {
		setToDoList(
			toDoList.map((toDo) =>
				toDo.id === id
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
