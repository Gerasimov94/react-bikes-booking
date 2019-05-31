import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Maps from './Maps';

export default class SelectedStation extends Component {
	static propTypes = {
		station: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		}),
		network: PropTypes.shape({
			id: PropTypes.string,
		}),
	}

	static defaultProps = {
		station: null,
		network: null,
	}

	render() {
		const {station, network} = this.props;
		const date = station ? new Date(station.timestamp) : new Date();
		const timeStamp = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

		return (
			station
				? (
					<div className='currentStation'>
						<div className='title'>Choosen station</div>
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
				: network && <div className='noop'>Choose station</div>
		);
	}
}
