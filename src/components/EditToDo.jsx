import { useState } from 'react';
import Button from './Button';

function EditToDo({ toDo, updateToDo }) {
	const [value, setValue] = useState(toDo.content);
	async function patchToDo(newToDo) {
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

	function handleChange(e) {
		const inputValue = e.target.value;
		setValue(inputValue);
	}

	function handleClick() {
		if (value.length) {
			patchToDo({ ...toDo, content: value, edit: false });
		}
	}

	function handleKeyDown(e) {
		if (e.code === 'Enter' && value.length) {
			patchToDo({ ...toDo, content: value, edit: false });
		}
	}

	return (
		<div className='d-flex flex-row justify-content align-item mb-10'>
			<input
				className='mr-15 flex-fill'
				placeholder='Ajouter une to do'
				value={value}
				type='text'
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<Button onClick={handleClick} className='mr-15' text='Sauvegarder' />
			<Button
				onClick={() => patchToDo({ ...toDo, edit: false })}
				text='Annuler'
			/>
		</div>
	);
}

export default EditToDo;
