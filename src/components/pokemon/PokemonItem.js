import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PokemonItem = ({ pokemon }) => {
	const id = pokemon.url.substring(34, pokemon.url.length - 1);
	return (
		<div className='card m4 flex-fill m-auto ' style={cardStyle}>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				className='card-img-top pokeimg'
				alt={pokemon.name}
			/>
			<Link to={`/pokemon/${id}`} className='card-title'>
				{pokemon.name}
			</Link>
		</div>
	);
};

const cardStyle = {
	width: '160px',
	height: '160px'
};
PokemonItem.propTypes = {};

export default PokemonItem;
