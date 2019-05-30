import {handleActions} from 'redux-actions';
import {
	SAVE_NETWORK,
	REQUEST_END,
	REQUEST_START,
	CHOOSE_NETWORK,
	SAVE_NETWORKS,
	SELECT_STATION,
} from '../constants/bikesConstants';

const initialState = {
	isFetching: false,
	networks: [],
	choosenNetworkID: null,
	selectedNetwork: null,
	selectedStation: null,
};

export default handleActions({
	[REQUEST_START]: state => ({
		...state,
		isFetching: true,
	}),
	[CHOOSE_NETWORK]: (state, {payload: {networkID}}) => ({
		...state,
		choosenNetworkID: networkID,
	}),
	[REQUEST_END]: state => ({
		...state,
		isFetching: false,
	}),
	[SAVE_NETWORKS]: (state, {payload: {networks}}) => ({
		...state,
		networks,
	}),
	[SAVE_NETWORK]: (state, {payload: {network}}) => ({
		...state,
		selectedNetwork: network,
	}),
	[SELECT_STATION]: (state, {payload: {selectedStation}}) => ({
		...state,
		selectedStation,
	}),
}, initialState);
