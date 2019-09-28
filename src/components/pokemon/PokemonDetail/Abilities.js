import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Abilities = ({ abilities }) => {
	return (
		<div className='card p-3'>
			<h5 className='card-title mx-auto'>Abilities</h5>
			<div className='container d-flex align-items-center text-capitalize'>
				{abilities.map(ability => {
					return (
						<span
							key={uuid.v4()}
							className='btn btn btn-primary mx-auto'
						>
							{ability.ability.name}
						</span>
					);
				})}
			</div>
		</div>
	);
};

Abilities.propTypes = {
	abilities: PropTypes.array.isRequired
};

export default Abilities;
