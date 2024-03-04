import { useState } from 'react';
import Button from './Button';

function AddToDo({ addToDo }) {
	const [value, setValue] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	function handleChange(e) {
		const inputValue = e.target.value;
		setValue(inputValue);
	}

	async function createToDo() {
		try {
			setLoading(true);
			setError(null);
			const response = await fetch('https://restapi.fr/api/todo', {
				method: 'POST',
				body: JSON.stringify({
					content: value,
					edit: false,
					done: false,
					select: false,
				}),
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (response.ok) {
				const toDo = await response.json();
				addToDo(toDo);
			} else {
				setError('Oops une erreur');
			}
		} catch (e) {
			console.log(e);
			setError('Oops une erreur');
		} finally {
			setLoading(false);
		}
		setValue('');
	}

	function handleClick() {
		if (value.length) {
			createToDo();
		}
	}

	function handleKeyDown(e) {
		if (e.code === 'Enter' && value.length) {
			createToDo();
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
			{error && <p>{error}</p>}
			<Button
				text={loading ? 'Chargement' : 'Ajouter'}
				onClick={handleClick}
			/>
		</div>
	);
}

export default AddToDo;
