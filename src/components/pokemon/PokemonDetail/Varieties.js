import React from 'react';
import PropTypes from 'prop-types';
import { parseId } from '../../HelpFuncs';
import { Link } from 'react-router-dom';
const Varieties = ({ varieties }) => {
	varieties = varieties.filter(variety => variety.is_default === false);
	return (
		<div className='card-group d-flex align-items-center'>
			{varieties.map(variety => {
				const pokid = parseId(variety.pokemon.url);
				return (
					<div
						key={pokid}
						className='card m-auto flex-fill align-items-center'
					>
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokid}.png`}
							onError={e => {
								e.target.onerror = null;
								e.target.src =
									'https://ih1.redbubble.net/image.731955024.9007/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg';
							}}
							alt={variety.pokemon.name}
							className='card-img-top pokeimg'
						/>
						<Link className='card-title' to={`/pokemon/${pokid}`}>
							{variety.pokemon.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

Varieties.propTypes = {
	varieties: PropTypes.array.isRequired
};

export default Varieties;
