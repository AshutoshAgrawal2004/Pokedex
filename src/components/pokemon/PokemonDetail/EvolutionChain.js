import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../../layout/Spinner';
import { parseId } from '../../HelpFuncs';
import uuid from 'uuid';
const EvolutionChain = ({ evolutionURL }) => {
	const [evolutionChain, setevolutionChain] = useState(null);
	const [child, setChild] = useState({});
	const getEvolutionChain = async evolutionURL => {
		const res = await axios.get(evolutionURL);
		const data = await res.data;
		setevolutionChain(data);
	};
	useEffect(() => {
		getEvolutionChain(evolutionURL);
	}, [evolutionURL]);
	if (evolutionChain === null) {
		return <Spinner />;
	} else {
		const { chain } = evolutionChain;
		const firstGen = chain;
		let Generation = [firstGen];
		if (Generation[0].evolves_to.length !== 0) {
			Generation[0].evolves_to.forEach(evol => {
				Generation.push(evol);
			});
			if (Generation[1].evolves_to.length !== 0) {
				Generation[1].evolves_to.forEach(evol => {
					Generation.push(evol);
				});
			}
		}

		return (
			<div className='card-group '>
				{Generation.map(gen => {
					const { name, url } = gen.species;
					return (
						<div
							className='card rounded-circle m-auto align-items-center'
							style={cardStyle}
							key={uuid.v4()}
						>
							<img
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseId(
									url
								)}.png`}
								className='card-img-top pokeimg'
								alt={name}
							/>
							<Link
								to={`/pokemon/${parseId(url)}`}
								className='card-title h4 text-capitalize'
							>
								{name}
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
};
const cardStyle = {
	maxWidth: '160px',
	maxHeight: '160px'
};
EvolutionChain.propTypes = {
	evolutionURL: PropTypes.string.isRequired
};

export default EvolutionChain;
