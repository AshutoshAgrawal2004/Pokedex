import React from 'react';

const Spinner = () => {
	return (
		<div class='d-flex justify-content-center'>
			<div class='spinner-border' role='status' style={spinnerStyle}>
				<span class='sr-only'>Loading...</span>
			</div>
		</div>
	);
};

const spinnerStyle = {
	width: '3rem',
	height: '3rem',
	color: '#FFDE00'
};

export default Spinner;
