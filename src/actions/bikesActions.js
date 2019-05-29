
import {createAction} from 'redux-actions';
import {
	REQUEST_START,
	REQUEST_END,
	SAVE_NETWORK,
	SAVE_NETWORKS,
	REQUEST_NETWORKS,
	CHOOSE_NETWORK,
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

export const chooseNetwork = createAction(
	CHOOSE_NETWORK,
	networkID => ({networkID})
);
