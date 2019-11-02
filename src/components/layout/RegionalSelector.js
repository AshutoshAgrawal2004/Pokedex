import React from 'react';
import PropTypes from 'prop-types';

const RegionalSelector = props => {
	return (
		<select className='custom-select'>
			<option selected>Select Region</option>
			<option value='kanto'>Kanto</option>
			<option value='johto'>Johto</option>
			<option value='hoenn'>Hoenn</option>
			<option value='sinnoh'>Sinnoh</option>
			<option value='unova'>Unova</option>
			<option value='kalos'>Kalos</option>
			<option value='alola'>Alola</option>
		</select>
	);
};

RegionalSelector.propTypes = {};

export default RegionalSelector;
