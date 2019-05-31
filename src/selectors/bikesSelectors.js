import {createSelector} from 'reselect';

export const getNetwork = state => state.networks;
export const getFetchingState = state => state.isFetching;
export const getSelectedNetwork = state => state.selectedNetwork;
export const getSelectedStation = state => state.selectedStation;
export const getNetworkFilter = state => state.networkFilter;
export const getStationFilter = state => state.stationFilter;

export const getNetworksByFilter = createSelector(
	getNetwork, getNetworkFilter,
	(network, filter) => network.filter(
		item => item.name.toLowerCase().includes(filter.toLowerCase())
	),
);

export const getStationsByFilter = createSelector(
	getSelectedNetwork, getStationFilter,
	(network, filter) => (network
		? ({
			...network,
			stations: network.stations.filter(
				station => station.name.toLowerCase().includes(filter.toLowerCase())
			),
		})
		: null)
);
