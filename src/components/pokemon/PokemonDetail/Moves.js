import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
const Moves = ({ moves }) => {
	moves = moves.filter(
		move => move.version_group_details[0].level_learned_at !== 0
	);
	moves.sort(
		(a, b) =>
			a.version_group_details[0].level_learned_at -
			b.version_group_details[0].level_learned_at
	);
	return (
		<div className='card p-3 '>
			<h5 className='card-title mx-auto'>Moves</h5>
			<table className='table table-striped table-hover table-borderless'>
				<thead>
					<tr>
						<th>Level</th>
						<th>Move</th>
					</tr>
				</thead>
				<tbody>
					{moves.map(move => {
						return (
							<tr key={uuid.v4()}>
								<th className=' text-capitalize'>
									{move.move.name}
								</th>
								<td>
									{
										move.version_group_details[0]
											.level_learned_at
									}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

Moves.propTypes = {
	moves: PropTypes.array.isRequired
};

export default Moves;
