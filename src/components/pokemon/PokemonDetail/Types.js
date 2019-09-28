import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
const Types = ({ types }) => {
	return (
		<Fragment>
			<div className='card p-3'>
				<h5 className='card-title mx-auto'>Type</h5>
				<div className='container d-flex align-items-center'>
					{types.map(type => {
						return (
							<span
								key={uuid.v4()}
								className={`text-capitalize text-white mx-auto btn type-${type.type.name}`}
							>
								{type.type.name}
							</span>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

Types.propTypes = {
	types: PropTypes.array.isRequired
};

export default Types;
