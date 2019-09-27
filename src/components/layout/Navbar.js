import React from 'react';
import SearchPokemons from './SearchPokemons';
const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-dark mb-5'>
			<span className='navbar-brand mb-0 h1 mx-auto'>Pokedex</span>
			<SearchPokemons />
		</nav>
	);
};

export default Navbar;
