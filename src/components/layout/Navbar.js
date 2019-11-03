import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchPokemons from './SearchPokemons';
import RegionalSelector from './RegionalSelector';
const Navbar = ({ location }) => {
	return (
		<nav className='navbar  sticky-top mb-5'>
			<Link
				to='/'
				className='navbar-brand mb-0 mx-auto poke-font'
				style={{ fontSize: '30px' }}
			>
				Pokedex
			</Link>
			{!location.pathname.startsWith('/pokemon') && (
				<form action='' className='form-inline'>
					<SearchPokemons />
					<RegionalSelector />
				</form>
			)}
		</nav>
	);
};

export default withRouter(Navbar);
