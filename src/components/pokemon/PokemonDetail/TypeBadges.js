import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TypeBadges = ({ types, bio }) => {
	const { height, weight, gender_rate, capture_rate } = bio;
	return (
		<Fragment>
			<table className='table'>
				<thead>
					<tr>
						<th>Height</th>
						<th>Weight</th>
						<th>Gender Rate</th>
						<th>Capture Rate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{height}</td>
						<td>{weight}</td>
						<td>{gender_rate}</td>
						<td>
							<div className='progress'>
								<div
									className={`progress-bar progress-bar-animated progress-bar-striped `}
									role='progressbar'
									style={{
										width: `${(capture_rate / 255) * 100}%`
									}}
									aria-valuenow={capture_rate}
									aria-valuemin='0'
									aria-valuemax='255'
								>
									{`${Math.floor(
										(capture_rate / 255) * 100
									)}%`}
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='card'>
				<h5 className='card-title mx-auto'>Type</h5>
				<div className='container d-flex align-items-center'>
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
		</Fragment>
	);
};

TypeBadges.propTypes = {
	types: PropTypes.array.isRequired
};

export default TypeBadges;
