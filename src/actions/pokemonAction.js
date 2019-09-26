import { GET_ALL_POKEMONS, SET_LOADING, POKEMON_ERROR } from './types';
import axios from 'axios';
export const getPokemons = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
		const data = await res.data;
		console.log(res);
		dispatch({
			type: GET_ALL_POKEMONS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};

export const setLoading = () => dispatch => {
	dispatch({
		type: SET_LOADING
	});
};
