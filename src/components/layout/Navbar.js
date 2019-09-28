import React from 'react';
import { Link } from 'react-router-dom';
import SearchPokemons from './SearchPokemons';
const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-danger mb-5'>
			<Link
				to='/'
				className='navbar-brand mb-0 mx-auto text-warning poke-font'
				style={{ fontSize: '30px' }}
			>
				Pokedex
			</Link>
			<SearchPokemons />
		</nav>
	);
};

export default Navbar;
