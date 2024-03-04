import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState, useEffect, useReducer } from 'react';
import themeContext from './context/theme';

function toDoReducer(state, action) {
	switch (action.type) {
		case 'FETCH_TODO': {
			return {
				...state,
				toDoList: action.toDoList,
			};
		}
		case 'ADD_TODO': {
			return { ...state, toDoList: [...state.toDoList, action.toDo] };
		}
		case 'UPDATE_TODO': {
			return {
				...state,
				toDoList: state.toDoList.map((t) =>
					t._id === action.toDo._id ? action.toDo : t
				),
			};
		}
		case 'DELETE_TODO': {
			return {
				...state,
				toDoList: state.toDoList.filter((t) => t._id !== action.toDo._id),
			};
		}
		default: {
			throw new Error('Action inconnue');
		}
	}
}

function App() {
	const [state, dispatch] = useReducer(toDoReducer, { toDoList: [] });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchToDo() {
			try {
				const response = await fetch('https://restapi.fr/api/todo');
				if (response.ok) {
					const toDo = await response.json();
					if (Array.isArray(toDo)) {
						dispatch({ type: 'FETCH_TODO', toDoList: toDo });
					} else {
						dispatch({ type: 'FETCH_TODO', toDoList: [toDo] });
					}
				} else {
					console.error(
						`Erreur lors de la requête : ${response.status} ${response.statusText}`
					);
				}
			} catch (error) {
				console.error("Une erreur s'est produite :", error);
			} finally {
				setLoading(false);
			}
		}
		fetchToDo();
	}, []);

	function addToDo(newToDo) {
		dispatch({ type: 'ADD_TODO', toDo: newToDo });
	}

	function deleteToDo(deletedToDo) {
		dispatch({ type: 'DELETE_TODO', toDo: deletedToDo });
	}

	function updateToDo(updatedToDo) {
		dispatch({ type: 'UPDATE_TODO', toDo: updatedToDo });
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
					{loading ? (
						<p>Chargement en cours...</p>
					) : (
						<ToDoList
							toDoList={state.toDoList}
							deleteToDo={deleteToDo}
							updateToDo={updateToDo}
						/>
					)}
				</div>
			</div>
		</themeContext.Provider>
	);
}

export default App;
