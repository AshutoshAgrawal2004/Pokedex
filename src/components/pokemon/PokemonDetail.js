import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getPokemonDetail,
	getPokemonSpecies
} from '../../actions/pokemonAction';
import Spinner from '../layout/Spinner';
import TypeBadges from './PokemonDetail/TypeBadges';
import StatsTable from './PokemonDetail/StatsTable';

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
		const { id, name, types, stats, height, weight } = current_pokemon;
		const {
			flavor_text_entries,
			capture_rate,
			gender_rate
		} = current_pokemon_species;
		const bio = { height, weight, capture_rate, gender_rate };
		return (
			<Fragment>
				<div className='card align-items-center'>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
						alt={name}
						className='card-img-top pokeimg'
					/>
					<div className='card-body'>
						<h1 className='card-title mx-auto'>{name}</h1>
						<p className='card-text'>
							{flavor_text_entries[1].language.name === 'en'
								? flavor_text_entries[1].flavor_text
								: flavor_text_entries[2].flavor_text}
						</p>
						<TypeBadges types={types} bio={bio} />
						<StatsTable stats={stats} />
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
