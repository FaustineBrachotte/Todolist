import { useState } from 'react';

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
			<button className='btn btn-primary mr-15' onClick={handleClick}>
				Sauvegarder
			</button>
			<button className='btn btn-reverse-primary' onClick={cancelEditToDo}>
				Annuler
			</button>
		</div>
	);
}

export default EditToDo;
