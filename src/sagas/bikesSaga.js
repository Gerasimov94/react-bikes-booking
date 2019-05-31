import {takeLatest, call, put, all} from 'redux-saga/effects';
import {startRequest, endRequest, saveNetworks, saveNetwork} from '../actions/bikesActions';
import {REQUEST_NETWORKS, CHOOSE_NETWORK} from '../constants/bikesConstants';
import {fetch} from '../utils/fetch';

function* getBikesNetworkRequest() {
	try {
		yield put(startRequest());

		const {data: {networks}} = yield call(fetch, 'networks');

		yield put(saveNetworks(networks));
	} catch (error) {
		throw new Error(error);
	} finally {
		yield put(endRequest());
	}
}

function* getStationsSaga({payload: {networkID}}) {
	try {
		const {data: {network}} = yield call(fetch, `networks/${networkID}`);

		yield put(saveNetwork(network));
	} catch (error) {
		throw new Error(error);
	}
}

export function* watchNetworks() {
	yield takeLatest(REQUEST_NETWORKS, getBikesNetworkRequest);
}

export function* watchStations() {
	yield takeLatest(CHOOSE_NETWORK, getStationsSaga);
}

export function* initBikesSaga() {
	yield all([
		watchNetworks(),
		watchStations(),
	]);
}
