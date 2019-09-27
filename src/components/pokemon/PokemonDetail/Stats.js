import React from 'react';
import PropTypes from 'prop-types';
import { toTitleCase } from '../../HelpFuncs';
const Stats = ({ stats }) => {
	return (
		<div className='card '>
			<h5 className='card-title mx-auto'>Stats</h5>
			<table className='table table-borderless'>
				<tbody>
					{stats.map(stat => {
						return (
							<tr>
								<th>
									<span className='progress-label'>
										{' '}
										{toTitleCase(stat.stat.name)}
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
