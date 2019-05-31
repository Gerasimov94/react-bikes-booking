import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Loader from './components/Loader';
import NetworkItem from './components/NetworkItem';
import StationsContainer from './containers/StationsContainer';
import SelectedStationContainer from './containers/SelectedStationContainer';

export default class App extends PureComponent {
	static propTypes = {
		initNetworkRequest: PropTypes.func.isRequired,
		chooseNetwork: PropTypes.func.isRequired,
		isFetching: PropTypes.bool.isRequired,
		networks: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			id: PropTypes.string,
		})).isRequired,
	}

	componentDidMount() {
		this.props.initNetworkRequest();
	}

	chooseNetwork = id => this.props.chooseNetwork(id);

	render() {
		const {isFetching, networks} = this.props;

		return (
			isFetching
				? <Loader />
				: (
					<div>
						<header className='header'>
							Where can i rent a bike?
						</header>
						<div style={{display: 'flex'}}>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<div className='title'>Networks:</div>
								<div className='networks'>
									{networks.map(item => (
										<NetworkItem
											key={item.id}
											network={item}
											onClick={this.chooseNetwork}
										/>
									))}
								</div>
							</div>
							<StationsContainer />
							<SelectedStationContainer />
						</div>
					</div>
				)
		);
	}
}
