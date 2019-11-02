import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import store from './store';
import { Provider } from 'react-redux';
import Pokemon from './components/pokemon/Pokemon';
import PokemonDetail from './components/pokemon/PokemonDetail';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<div className='container-fluid'>
						<Switch>
							<Route exact path='/' component={Pokemon} />
							<Route
								exact
								path='/pokemon/:id'
								component={PokemonDetail}
							/>
						</Switch>
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
