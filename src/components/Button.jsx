import { useContext } from 'react';
import themeContext from '../context/theme';

function Button({ text, className, ...props }) {
	const theme = useContext(themeContext);

	return (
		<button {...props} className={`${className} btn btn-${theme}`}>
			{text}
		</button>
	);
}

export default Button;
