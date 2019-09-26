import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonDetail } from '../../actions/pokemonAction';
import Spinner from '../layout/Spinner';
class PokemonDetail extends Component {
	static propTypes = {
		pokemons: PropTypes.object.isRequired,
		getPokemonDetail: PropTypes.func.isRequired
	};
	componentDidMount() {
		this.props.getPokemonDetail(this.props.match.params.id);
	}
	render() {
		const { loading, current_pokemon } = this.props.pokemons;
		if (current_pokemon === null || loading) {
			return <Spinner />;
		}
		const { id, name, types, stats } = current_pokemon;
		// const typeBadges =

		return (
			<Fragment>
				<div className='card align-items-center'>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
						alt={name}
						className='card-img-top pokeimg'
					/>
					<div className='card-body'>
						<h1 className='card-title'>{name}</h1>
						{types.map(type => {
							return (
								<span
									className={`badge type-${type.type.name} white`}
								>
									{type.type.name}
								</span>
							);
						})}

						<table className='table table-borderless'>
							<tbody>
								{stats.map(stat => {
									return (
										<tr>
											<th>
												<span className='progress-label'>
													{' '}
													{stat.stat.name}
												</span>
											</th>
											<td>
												<div
													className='progress'
													style={{ width: '100px' }}
												>
													<div
														className={`progress-bar progress-bar-striped stat-${stat.stat.name} `}
														role='progressbar'
														style={{
															width: `${stat.base_stat}%`
														}}
														aria-valuenow={
															stat.base_stat
														}
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	pokemons: state.pokemons
});
export default connect(
	mapStateToProps,
	{ getPokemonDetail }
)(PokemonDetail);
