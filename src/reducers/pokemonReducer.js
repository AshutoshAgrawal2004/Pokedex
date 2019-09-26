import {
	GET_ALL_POKEMONS,
	GET_POKEMON_DETAIL,
	POKEMON_ERROR,
	SET_LOADING
} from '../actions/types';

const initialState = {
	pokemons: null,
	current_pokemon: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				loading: false
			};
		case GET_POKEMON_DETAIL:
			return {
				...state,
				current_pokemon: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
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
