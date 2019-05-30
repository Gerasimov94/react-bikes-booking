import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Loader from './components/Loader';
import NetworkItem from './components/NetworkItem';
import StationsContainer from './containers/StationsContainer';
import Station from './components/Station';
import StationContainer from './containers/StationContainer';

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
							Find your bike:
						</header>
						<div style={{display: 'flex'}}>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<div style={{fontSize: 24}}>Networks:</div>
								<div className='network'>
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
							<StationContainer />
						</div>
					</div>
				)
		);
	}
}
