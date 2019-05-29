import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NetworkItem extends Component {
	static propTypes = {
		network: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			id: PropTypes.string,
		})).isRequired,
		onClick: PropTypes.func.isRequired,
	}

	onClick = () => {
		const {onClick, network} = this.props;

		onClick(network.id);
	}

	render() {
		const {network} = this.props;

		return (
			<div
				onClick={this.onClick}
				className='network-item'
			>
				{network.name}
			</div>
		);
	}
}
