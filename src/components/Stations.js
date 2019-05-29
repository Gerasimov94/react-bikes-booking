import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Stations extends Component {
	static propTypes = {
		network: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		}).isRequired,
		onClick: PropTypes.func.isRequired,
	}

	onClick = () => {
		const {onClick, network} = this.props;

		//onClick(network.id);
	}

	render() {
		const {network} = this.props;

		return (
			network
				? (
					<div
						onClick={this.onClick}
						className='currentNetwork'
					>
						{network.name}
					</div>
				)
				: <div className='currentNetwork'>choose network</div>
		);
	}
}
