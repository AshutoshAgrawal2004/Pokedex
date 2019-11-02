import {
	GET_FIRST_POKEMONS,
	GET_MORE_POKEMONS,
	GET_POKEMON_DETAIL,
	GET_POKEMON_SPECIES,
	GET_REGIONAL_POKEMONS,
	CLEAR_REGIONAL_POKEMONS,
	POKEMON_ERROR,
	SET_LOADING,
	CLEAR_CURRENT,
	FILTER_POKEMONS,
	CLEAR_FILTER
} from '../actions/types';

const initialState = {
	pokemons: [],
	filtered_pokemons: null,
	regional_pokemons: null,
	current_pokemon: null,
	current_pokemon_species: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FIRST_POKEMONS:
			return {
				...state,
				pokemons: action.payload.results,
				loading: false
			};
		case GET_MORE_POKEMONS:
			return {
				...state,
				pokemons: state.pokemons.concat(action.payload.results),
				loading: false
			};
		case GET_REGIONAL_POKEMONS:
			return {
				...state,
				regional_pokemons: action.payload,
				loading: false
			};
		case CLEAR_REGIONAL_POKEMONS:
			return {
				...state,
				regional_pokemons: null
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
		case FILTER_POKEMONS:
			return {
				...state,
				filtered_pokemons: state.pokemons.results.filter(pokemon => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return pokemon.name.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered_pokemons: null
			};
		default:
			return state;
	}
};
