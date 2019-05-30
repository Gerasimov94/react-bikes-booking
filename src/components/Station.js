import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Maps from './Maps';

export default class Station extends Component {
	static propTypes = {
		station: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		}).isRequired,
		onClick: PropTypes.func.isRequired,
	}

	onClick = () => {
		const {onClick, station} = this.props;

		//onClick(network.id);
	}

	render() {
		const {station} = this.props;
		const date = station ? new Date(station.timestamp) : new Date();
		const timeStamp = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

		return (
			station
				? (
					<div
						onClick={this.onClick}
						className='currentNetwork'
					>
						<div>Choosen station</div>
						<div>
							<h3>{station.name}</h3>
							<table className='table'>
								<tbody>
									<tr>
										<th>empty slots</th>
										<th>free bikes</th>
										<th>date</th>
									</tr>
									<tr>
										<td>
											{station.empty_slots}
										</td>
										<td>
											{station.free_bikes}
										</td>
										<td>
											{timeStamp}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Maps station={station} />
					</div>
				)
				: <div className='currentNetwork'>choose network</div>
		);
	}
}
