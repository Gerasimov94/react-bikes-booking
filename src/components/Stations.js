import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StationItem from './StationItem';

export default class Stations extends Component {
	static propTypes = {
		saveStation: PropTypes.func.isRequired,
		network: PropTypes.shape({
			stations: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.string,
			})),
		}),
	}

	static defaultProps = {
		network: null,
	}

	onStationClick = id => this.props.saveStation(id)

	render() {
		return (
			this.props.network
				? (
					<div className='stations'>
						<div className='title'>
							Stations
						</div>
						<div className='stations__content'>
							{this.props.network.stations.map(station => (
								<StationItem
									key={station.id}
									onClick={this.onStationClick}
									station={station}
								/>
							))}
						</div>
					</div>
				)
				: <div className='noop'>Choose network</div>
		);
	}
}
