import React from 'react';
import PropTypes from 'prop-types';
import { toTitleCase } from '../../HelpFuncs';
const Abilities = ({ abilities }) => {
	return (
		<div className='card'>
			<h5 className='card-title mx-auto'>Abilities</h5>
			<div className='container d-flex align-items-center'>
				{abilities.map(ability => {
					return (
						<span className='btn btn btn-primary mx-auto'>
							{toTitleCase(ability.ability.name)}
						</span>
					);
				})}
			</div>
		</div>
	);
};

Abilities.propTypes = {
	abilities: PropTypes.object.isRequired
};

export default Abilities;
