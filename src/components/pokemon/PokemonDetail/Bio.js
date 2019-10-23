import React from 'react';
import PropTypes from 'prop-types';

const Bio = ({ bio }) => {
	const { height, weight, gender_rate, capture_rate } = bio;

	return (
		<div className='card p-3 '>
			<h5 className='card-title text-center'>Bio</h5>
			<div className='card-body'>
				<div className='table-responsive'>
					<table className='table table-borderless text-center'>
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
								<td>
									<table className='table'>
										<tbody>
											<tr>
												<td>{`${height / 10} m`}</td>
												<td>{`${Math.floor(
													((height / 10) * 39.37) / 12
												)}' ${Math.floor(
													((height / 10) * 39.37) % 12
												)}''`}</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>
									<table className='table'>
										<tbody>
											<tr>
												<td>{`${weight / 10} kg`}</td>
												<td>{`${(
													(weight / 10) *
													2.205
												).toFixed(2)} lbs`}</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td>
									{gender_rate !== -1 ? (
										<div className='progress'>
											<div
												className={`progress-bar progress-bar-striped bg-primary`}
												role='progressbar'
												style={{
													width: `${(8 -
														gender_rate) *
														12.5}%`
												}}
												aria-valuenow={8 - gender_rate}
												aria-valuemin='-1'
												aria-valuemax='8'
											></div>

											<div
												className={`progress-bar  progress-bar-striped stat-speed`}
												role='progressbar'
												style={{
													width: `${gender_rate *
														12.5}%`
												}}
												aria-valuenow={gender_rate}
												aria-valuemin='-1'
												aria-valuemax='8'
											></div>
										</div>
									) : (
										<span>Gender Unknown</span>
									)}
								</td>
								<td>
									<div className='progress'>
										<div
											className={`progress-bar progress-bar-animated progress-bar-striped `}
											role='progressbar'
											style={{
												width: `${(capture_rate / 255) *
													100}%`
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
				</div>
			</div>
		</div>
	);
};

Bio.propTypes = {
	bio: PropTypes.object.isRequired
};

export default Bio;
