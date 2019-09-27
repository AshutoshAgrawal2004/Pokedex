import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons } from '../../actions/pokemonAction';
import Spinner from '../layout/Spinner';
import PokemonItem from './PokemonItem';
const Pokemon = ({
	getPokemons,
	pokemons: { loading, pokemons, filtered_pokemons }
}) => {
	useEffect(() => {
		getPokemons();
		console.log(pokemons);
	}, []);

	if (filtered_pokemons !== null) {
		return (
			<div className='card-group d-flex'>
				{filtered_pokemons.map(pokemon => (
					<PokemonItem pokemon={pokemon} />
				))}
			</div>
		);
	} else if (pokemons !== null && pokemons.length !== 0) {
		return (
			<div className='card-group d-flex'>
				{pokemons.results.map(pokemon => (
					<PokemonItem pokemon={pokemon} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

Pokemon.propTypes = {
	pokemons: PropTypes.object.isRequired,
	getPokemons: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	pokemons: state.pokemons
});
export default connect(
	mapStateToProps,
	{ getPokemons }
)(Pokemon);
