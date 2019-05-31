import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class StationItem extends Component {
	static propTypes = {
		station: PropTypes.shape({
			name: PropTypes.string,
			id: PropTypes.string,
		}).isRequired,
		onClick: PropTypes.func.isRequired,
	}

	onClick = () => {
		const {onClick, station} = this.props;

		onClick(station);
	}

	render() {
		const {station} = this.props;

		return (
			<div
				onClick={this.onClick}
				className='network-item'
			>
				<div>
					{station.name}
				</div>
				<div>
					{station.id}
				</div>
			</div>
		);
	}
}
