import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useReducer } from 'react';
import themeContext from './context/theme';
import toDoReducer from './reducers/toDoReducer';

function App() {
	const [state, dispatch] = useReducer(toDoReducer, {
		theme: 'primary',
		toDoList: [],
	});

	function addToDo(content) {
		dispatch({
			type: 'ADD_TODO',
			content,
		});
	}

	function deleteToDo(id) {
		dispatch({
			type: 'DELETE_TODO',
			id,
		});
	}

	function toggleToDo(id) {
		dispatch({
			type: 'TOGGLE_TODO',
			id,
		});
	}

	function toggleToDoEdit(id) {
		dispatch({
			type: 'TOGGLE_TODO_EDIT',
			id,
		});
	}

	function editToDo(id, content) {
		dispatch({
			type: 'EDIT_TODO',
			id,
			content,
		});
	}

	function selectToDo(id) {
		dispatch({
			type: 'SELECT_TODO',
			id,
		});
	}

	function handleChange(e) {
		dispatch({
			type: 'SET_THEME',
			theme: e.target.value,
		});
	}

	return (
		<themeContext.Provider value={state.theme}>
			<div className='d-flex flex-row justify-content align-item p-20'>
				<div className='card container p-20'>
					<h1 className='mb-20 d-flex flex-row justify-content align-items'>
						<span className='flex-fill'>To do list</span>
						<select value={state.theme} onChange={handleChange}>
							<option value='primary'>Thème orange</option>
							<option value='secondary'>Thème bleu</option>
						</select>
					</h1>
					<AddToDo addToDo={addToDo} />
					<ToDoList
						toDoList={state.toDoList}
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
