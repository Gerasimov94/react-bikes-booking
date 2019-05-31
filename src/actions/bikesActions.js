
import {createAction} from 'redux-actions';
import {
	REQUEST_START,
	REQUEST_END,
	SAVE_NETWORK,
	SAVE_NETWORKS,
	REQUEST_NETWORKS,
	CHOOSE_NETWORK,
	SELECT_STATION,
	CHANGE_NETWORK_FILTER,
	CHANGE_STATION_FILTER,
} from '../constants/bikesConstants';

export const startRequest = createAction(
	REQUEST_START
);

export const initNetworkRequest = createAction(
	REQUEST_NETWORKS
);

export const endRequest = createAction(
	REQUEST_END
);

export const saveNetworks = createAction(
	SAVE_NETWORKS,
	networks => ({networks})
);

export const saveNetwork = createAction(
	SAVE_NETWORK,
	network => ({network})
);

export const saveStation = createAction(
	SELECT_STATION,
	selectedStation => ({selectedStation})
);

export const chooseNetwork = createAction(
	CHOOSE_NETWORK,
	networkID => ({networkID})
);

export const changeNetworkFilter = createAction(
	CHANGE_NETWORK_FILTER,
	filter => ({filter})
);

export const changeStationFilter = createAction(
	CHANGE_STATION_FILTER,
	filter => ({filter})
);
