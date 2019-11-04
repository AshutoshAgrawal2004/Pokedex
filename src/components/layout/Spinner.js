import React from 'react';

const Spinner = () => {
	return (
		<div className='d-flex justify-content-center'>
			<div className='spinner-border' role='status' style={spinnerStyle}>
				<span className='sr-only'>Loading...</span>
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
