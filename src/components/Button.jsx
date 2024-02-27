function Button({ text, className, ...props }) {
	return (
		<button {...props} className={`${className} btn btn-primary`}>
			{text}
		</button>
	);
}

export default Button;
