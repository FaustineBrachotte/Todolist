import Button from './Button';
import { useContext } from 'react';
import themeContext from '../context/theme';

function ToDoItem({ toDo, deleteToDo, toggleToDo, editToDo, selectToDo }) {
	const theme = useContext(themeContext);
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
					toggleToDo();
				}}
				className='mr-15'
				text='Valider'
			/>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					editToDo();
				}}
				className='mr-15'
				text='Modifier'
			/>

			<Button
				onClick={(e) => {
					e.stopPropagation();
					deleteToDo();
				}}
				text='Supprimer'
			/>
		</li>
	);
}

export default ToDoItem;
