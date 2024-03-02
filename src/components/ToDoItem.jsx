import Button from './Button';
import { useContext } from 'react';
import themeContext from '../context/theme';

function ToDoItem({ toDo, deleteToDo, selectToDo, updateToDo }) {
	const theme = useContext(themeContext);

	async function fetchPatchToDo(newToDo) {
		try {
			// eslint-disable-next-line no-unused-vars
			const { _id, ...newToDoWithouId } = newToDo;
			const response = await fetch(
				`https://restapi.fr/api/todo/${toDo._id}`,
				{
					method: 'PATCH',
					body: JSON.stringify(newToDoWithouId),
					headers: {
						'Content-type': 'application/json',
					},
				}
			);
			if (response.ok) {
				const newToDo = await response.json();
				updateToDo(newToDo);
			} else {
				console.log('Erreur');
			}
		} catch (e) {
			console.log(e);
		}
	}

	async function fetchDeleteToDo() {
		try {
			const response = await fetch(
				`https://restapi.fr/api/todo/${toDo._id}`,
				{
					method: 'DELETE',
				}
			);
			if (response.ok) {
				deleteToDo(toDo);
			} else {
				console.log('Erreur');
			}
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<li
			onClick={selectToDo}
			className={`mb-10 d-flex flex-row justify-content align-items p-10 ${
				toDo.selected ? `selected-${theme}` : ''
			}`}
		>
			<span className='flex-fill mr-15'>
				{toDo.content} {toDo.done && '(✓)'}
			</span>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					fetchPatchToDo({ ...toDo, done: !toDo.done });
				}}
				className='mr-15'
				text='Valider'
			/>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					fetchPatchToDo({ ...toDo, edit: true });
				}}
				className='mr-15'
				text='Modifier'
			/>

			<Button
				onClick={(e) => {
					e.stopPropagation();
					fetchDeleteToDo();
				}}
				text='Supprimer'
			/>
		</li>
	);
}

export default ToDoItem;
