import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons } from '../../actions/pokemonAction';

const Pokemon = ({ getPokemons }) => {
	useEffect(() => {
		getPokemons();
	}, []);
	return <div>I am pokemon master</div>;
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
