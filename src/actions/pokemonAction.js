import {
	GET_ALL_POKEMONS,
	GET_POKEMON_DETAIL,
	SET_LOADING,
	POKEMON_ERROR,
	GET_POKEMON_SPECIES,
	CLEAR_CURRENT
} from './types';
import axios from 'axios';
export const getPokemons = () => async dispatch => {
	try {
		clearCurrent();
		setLoading();
		const res = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=151'
		);
		const data = await res.data;
		console.log(data);
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
export const getPokemonDetail = id => async dispatch => {
	try {
		clearCurrent();
		setLoading();
		const res = await axios.get(`
			https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await res.data;
		console.log(data);
		dispatch({
			type: GET_POKEMON_DETAIL,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};
export const getPokemonSpecies = id => async dispatch => {
	try {
		clearCurrent();
		setLoading();
		const res = await axios.get(`
			https://pokeapi.co/api/v2/pokemon-species/${id}`);
		const data = await res.data;
		console.log(data);
		dispatch({
			type: GET_POKEMON_SPECIES,
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
export const clearCurrent = () => dispatch => {
	console.log('cleaning current pokemon');
	dispatch({
		type: CLEAR_CURRENT
	});
};
