import {
	GET_FIRST_POKEMONS,
	GET_MORE_POKEMONS,
	GET_POKEMON_DETAIL,
	SET_LOADING,
	POKEMON_ERROR,
	GET_REGIONAL_POKEMONS,
	CLEAR_REGIONAL_POKEMONS,
	GET_POKEMON_SPECIES,
	CLEAR_CURRENT,
	FILTER_POKEMONS,
	CLEAR_FILTER
} from './types';
import axios from 'axios';
import { parseId } from '../components/HelpFuncs';
const regionalPokedexNumbers = {
	kanto: {
		start: 1,
		end: 151
	},
	johto: {
		start: 152,
		end: 251
	},
	hoenn: {
		start: 252,
		end: 386
	},
	sinnoh: {
		start: 387,
		end: 493
	},
	unova: {
		start: 494,
		end: 649
	},
	kalos: {
		start: 650,
		end: 721
	},
	alola: {
		start: 722,
		end: 807
	},
	mega: {
		start: 808,
		end: 964
	}
};
export const getFirstPokemons = () => async dispatch => {
	try {
		dispatch(setLoading());
		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=100`
		);
		const data = await res.data;
		dispatch({
			type: GET_FIRST_POKEMONS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};
export const getMorePokemons = () => async (dispatch, state) => {
	try {
		/* This is the starting number from which pokemons to fetch for infinite scroll. This implies that the next request will start from last pokemon*/

		const start = state().pokemons.pokemons.length;

		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${start}`
		);
		const data = await res.data;
		dispatch({
			type: GET_MORE_POKEMONS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};
export const getRegionalPokemons = region => async dispatch => {
	try {
		dispatch(setLoading());
		const regionalGroup = regionalPokedexNumbers[region];
		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=${regionalGroup.end -
				regionalGroup.start +
				1}&offset=${regionalGroup.start - 1}`
		);
		const data = await res.data;
		dispatch({
			type: GET_REGIONAL_POKEMONS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};
export const clearRegionalPokemons = () => {
	return {
		type: CLEAR_REGIONAL_POKEMONS
	};
};
export const getPokemonDetail = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.get(`
			https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await res.data;
		dispatch({
			type: GET_POKEMON_DETAIL,
			payload: data
		});
		const pokeID = parseId(data.species.url);
		dispatch(getPokemonSpecies(pokeID));
	} catch (err) {
		dispatch({
			type: POKEMON_ERROR,
			payload: err
		});
	}
};
export const getPokemonSpecies = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.get(`
			https://pokeapi.co/api/v2/pokemon-species/${id}`);
		const data = await res.data;
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
	dispatch({
		type: CLEAR_CURRENT
	});
};
export const filterPokemons = text => dispatch => {
	dispatch({
		type: FILTER_POKEMONS,
		payload: text
	});
};

export const clearFilter = () => dispatch => {
	dispatch({
		type: CLEAR_FILTER
	});
};
