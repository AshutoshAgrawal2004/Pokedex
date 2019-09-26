import {
	GET_ALL_POKEMONS,
	GET_POKEMON_DETAIL,
	GET_POKEMON_SPECIES,
	POKEMON_ERROR,
	SET_LOADING,
	CLEAR_CURRENT
} from '../actions/types';

const initialState = {
	pokemons: null,
	current_pokemon: null,
	current_pokemon_species: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				loading: false,
				current: null
			};
		case GET_POKEMON_DETAIL:
			return {
				...state,
				current_pokemon: action.payload,
				loading: false
			};
		case GET_POKEMON_SPECIES:
			return {
				...state,
				current_pokemon_species: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current_pokemon: null,
				current_pokemon_species: null
			};
		case POKEMON_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
