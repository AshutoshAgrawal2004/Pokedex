import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterPokemons, clearFilter } from '../../actions/pokemonAction';
import PropTypes from 'prop-types';

const SearchPokemons = ({ filterPokemons, clearFilter, filtered_pokemons }) => {
	const text = useRef('');
	useEffect(() => {
		if (filtered_pokemons === null) {
			text.current.value = '';
		}
	});
	const onChange = e => {
		if (text.current.value !== '') {
			filterPokemons(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<input
			type='search'
			ref={text}
			aria-label='Filter Pokemons...'
			placeholder='Filter Pokemons....'
			className='form-control mr-sm-2 my-2'
			onChange={onChange}
		/>
	);
};
SearchPokemons.propTypes = {
	filtered_pokemons: PropTypes.array,
	filterPokemons: PropTypes.func.isRequired,
	clearFilter: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	filtered_pokemons: state.pokemons.filtered_pokemons
});
export default connect(
	mapStateToProps,
	{ filterPokemons, clearFilter }
)(SearchPokemons);
