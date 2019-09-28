import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Stats = ({ stats }) => {
	return (
		<div className='card p-3 '>
			<h5 className='card-title mx-auto'>Stats</h5>
			<table className='table table-borderless'>
				<tbody>
					{stats.map(stat => {
						return (
							<tr key={uuid.v4()}>
								<th>
									<span className='progress-label text-capitalize'>
										{' '}
										{stat.stat.name}
									</span>
								</th>
								<td style={{ width: '60%' }}>
									<div className='progress'>
										<div
											className={`progress-bar progress-bar-animated progress-bar-striped stat-${stat.stat.name} `}
											role='progressbar'
											style={{
												width: `${(stat.base_stat /
													180) *
													100}%`
											}}
											aria-valuenow={stat.base_stat}
											aria-valuemin='0'
											aria-valuemax='180'
										></div>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

Stats.propTypes = {
	stats: PropTypes.array.isRequired
};

export default Stats;
