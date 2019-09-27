import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { toTitleCase } from '../../HelpFuncs';

const Types = ({ types, bio }) => {
	return (
		<Fragment>
			<div className='card'>
				<h5 className='card-title mx-auto'>Type</h5>
				<div className='container d-flex align-items-center'>
					{types.map(type => {
						return (
							<span
								className={` text-white mx-auto btn type-${type.type.name}`}
							>
								{toTitleCase(type.type.name)}
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
