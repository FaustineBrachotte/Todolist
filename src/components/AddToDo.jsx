import { useState } from 'react';

function AddToDo({ addToDo }) {
	const [value, setValue] = useState('');

	function handleChange(e) {
		const inputValue = e.target.value;
		setValue(inputValue);
	}

	function handleClick() {
		if (value.length) {
			addToDo(value);
			setValue('');
		}
	}

	function handleKeyDown(e) {
		if (e.code === 'Enter') {
			handleClick();
		}
	}

	return (
		<div className='d-flex flex-row justify-content align-item mb-20'>
			<input
				className='mr-15 flex-fill'
				placeholder='Ajouter une to do'
				value={value}
				type='text'
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<button className='btn btn-primary' onClick={handleClick}>
				Ajouter
			</button>
		</div>
	);
}

export default AddToDo;
