import React, {Component} from 'react';
import StationItem from './StationItem';

export default class Stations extends Component {

	onStationClick = (id) => this.props.saveStation(id)

	render() {
		return (
			<div>
				{this.props.network && (
					<>
						<div>
							Stations
						</div>
						{this.props.network.stations.map(station => (
							<StationItem
								key={station.id}
								onClick={this.onStationClick}
								station={station}
							/>
						))}
					</>
				)}
			</div>
		);
	}
}
