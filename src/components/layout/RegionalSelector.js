import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getRegionalPokemons,
	clearRegionalPokemons,
	clearFilter
} from '../../actions/pokemonAction';
const RegionalSelector = ({
	pokemons,
	getRegionalPokemons,
	clearRegionalPokemons,
	clearFilter
}) => {
	const onChange = e => {
		if (e.target.value === 'default') {
			clearRegionalPokemons();
		} else {
			clearFilter();
			getRegionalPokemons(e.target.value);
		}
	};
	return (
		<select className='custom-select' onChange={onChange}>
			<option value='default'>Select Region</option>
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

RegionalSelector.propTypes = {
	pokemons: PropTypes.object.isRequired,
	getRegionalPokemons: PropTypes.func.isRequired,
	clearRegionalPokemons: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	pokemons: state.pokemons
});
export default connect(
	mapStateToProps,
	{ getRegionalPokemons, clearRegionalPokemons, clearFilter }
)(RegionalSelector);
