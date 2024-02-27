import { useState } from 'react';
import Button from './Button';

function EditToDo({ toDo, editToDo, cancelEditToDo }) {
	const [value, setValue] = useState(toDo.content);

	function handleChange(e) {
		const inputValue = e.target.value;
		setValue(inputValue);
	}

	function handleClick() {
		if (value.length) {
			editToDo(value);
		}
	}

	function handleKeyDown(e) {
		if (e.code === 'Enter') {
			handleClick();
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
			<Button onClick={cancelEditToDo} text='Annuler' />
		</div>
	);
}

export default EditToDo;
