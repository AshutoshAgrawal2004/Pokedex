import React from 'react';
import PropTypes from 'prop-types';

const TypeBadges = ({ types }) => {
	return (
		<div className='card'>
			<h5 className='card-title mx-auto'>Type</h5>
			<div className='container d-flex'>
				{types.map(type => {
					return (
						<span
							className={` text-white badge badge type-${type.type.name}`}
						>
							{type.type.name}
						</span>
					);
				})}
			</div>
		</div>
	);
};

TypeBadges.propTypes = {
	types: PropTypes.array.isRequired
};

export default TypeBadges;
