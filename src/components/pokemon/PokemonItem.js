import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { parseId } from '../HelpFuncs';
const PokemonItem = ({ pokemon }) => {
	return (
		<div
			className='card m-auto flex-fill align-items-center'
			style={cardStyle}
		>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseId(
					pokemon.url
				)}.png`}
				className='card-img-top pokeimg'
				alt={pokemon.name}
			/>
			<Link
				to={`/pokemon/${parseId(pokemon.url)}`}
				className='card-title h4 text-capitalize'
			>
				{pokemon.name}
			</Link>
		</div>
	);
};

const cardStyle = {
	width: '160px',
	height: '160px'
};
PokemonItem.propTypes = {
	pokemon: PropTypes.object.isRequired
};

export default PokemonItem;
