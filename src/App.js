import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import store from './store';
import { Provider } from 'react-redux';
import Pokemon from './components/pokemon/Pokemon';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Pokemon} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
