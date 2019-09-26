import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PokemonItem = ({ pokemon }) => {
	const id = pokemon.url.substring(34, pokemon.url.length - 1);
	return (
		<div className='card m4 flex-fill m-auto' style={cardStyle}>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				style={imgStyle}
				className='card-img-top'
				alt={pokemon.name}
			/>
			<Link to={`/pokemon/${id}`} className='card-title'>
				{pokemon.name}
			</Link>
		</div>
	);
};
const imgStyle = {
	width: '100px',
	height: '100px'
};
const cardStyle = {
	width: '160px',
	height: '160px'
};
PokemonItem.propTypes = {};

export default PokemonItem;
