import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {
	getPokemonDetail,
	getPokemonSpecies
} from '../../actions/pokemonAction';
import Spinner from '../layout/Spinner';
import Types from './PokemonDetail/Types';
import Stats from './PokemonDetail/Stats';
import Abilities from './PokemonDetail/Abilities';
import Bio from './PokemonDetail/Bio';
import Moves from './PokemonDetail/Moves';
import Varieties from './PokemonDetail/Varieties';

import { toTitleCase } from '../HelpFuncs';
class PokemonDetail extends Component {
	static propTypes = {
		pokemons: PropTypes.object.isRequired,
		getPokemonDetail: PropTypes.func.isRequired,
		getPokemonSpecies: PropTypes.func.isRequired
	};
	componentDidMount() {
		this.props.getPokemonDetail(this.props.match.params.id);
		this.props.getPokemonSpecies(this.props.match.params.id);
	}
	render() {
		const {
			loading,
			current_pokemon,
			current_pokemon_species
		} = this.props.pokemons;
		if (
			current_pokemon === null ||
			current_pokemon_species === null ||
			loading
		) {
			return <Spinner />;
		}
		const {
			id,
			name,
			types,
			stats,
			height,
			weight,
			abilities,
			moves
		} = current_pokemon;
		const {
			flavor_text_entries,
			capture_rate,
			gender_rate,
			varieties
		} = current_pokemon_species;
		const bio = { height, weight, capture_rate, gender_rate };
		return (
			<Fragment>
				<div className='card align-items-center'>
					<Varieties varieties={varieties} />
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
						onError={e => {
							e.target.onerror = null;
							e.target.src =
								'https://ih1.redbubble.net/image.731955024.9007/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg';
						}}
						alt={name}
						className='card-img-top pokeimg'
					/>
					<div className='card-body'>
						<h1 className='card-title text-center text-capitalize'>
							{name}
						</h1>
						<p className='card-text'>
							{flavor_text_entries[1].language.name === 'en'
								? flavor_text_entries[1].flavor_text
								: flavor_text_entries[2].flavor_text}
						</p>
						<Abilities key={uuid.v4()} abilities={abilities} />
						<Bio key={uuid.v4()} bio={bio} />
						<Types key={uuid.v4()} types={types} />
						<Stats key={uuid.v4()} stats={stats} />
						<Moves key={uuid.v4()} moves={moves} />
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	pokemons: state.pokemons
});
export default connect(
	mapStateToProps,
	{ getPokemonDetail, getPokemonSpecies }
)(PokemonDetail);
