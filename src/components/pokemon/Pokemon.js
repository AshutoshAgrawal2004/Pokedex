import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFirstPokemons, getMorePokemons } from '../../actions/pokemonAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../layout/Spinner';
import PokemonItem from './PokemonItem';
import uuid from 'uuid';
const Pokemon = ({
	getFirstPokemons,
	getMorePokemons,
	pokemons: { loading, pokemons, filtered_pokemons, regional_pokemons }
}) => {
	useEffect(() => {
		getFirstPokemons();
	}, []);
	if (loading) {
		return <Spinner />;
	} else if (filtered_pokemons !== null) {
		return (
			<div className='card-group d-flex align-items-center'>
				{filtered_pokemons.map(pokemon => (
					<PokemonItem key={uuid.v4()} pokemon={pokemon} />
				))}
			</div>
		);
	} else if (regional_pokemons !== null) {
		return (
			<div className='card-group d-flex align-items-center'>
				{regional_pokemons.map(pokemon => (
					<PokemonItem key={uuid.v4()} pokemon={pokemon} />
				))}
			</div>
		);
	} else if (pokemons !== null && pokemons.length !== 0) {
		return (
			<InfiniteScroll
				dataLength={pokemons.length} //This is important field to render the next data
				next={getMorePokemons}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<div className='card-group d-flex align-items-center'>
					{pokemons.map(pokemon => (
						<PokemonItem key={uuid.v4()} pokemon={pokemon} />
					))}
				</div>
			</InfiniteScroll>
		);
	} else {
		return <h1>No Results Found</h1>;
	}
};

Pokemon.propTypes = {
	pokemons: PropTypes.object.isRequired,
	getFirstPokemons: PropTypes.func.isRequired,
	getMorePokemons: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	pokemons: state.pokemons
});
export default connect(
	mapStateToProps,
	{ getFirstPokemons, getMorePokemons }
)(Pokemon);
