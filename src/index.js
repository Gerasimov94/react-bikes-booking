import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import AppContainer from './containers/AppContainer';
import {initBikesSaga} from './sagas/bikesSaga';
import bikesReducer from './reducers/bikesReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(bikesReducer, applyMiddleware(
	logger,
	sagaMiddleware,
));

sagaMiddleware.run(initBikesSaga);

export default render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root'),
);
