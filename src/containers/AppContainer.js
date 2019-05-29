import {connect} from 'react-redux';
import {initNetworkRequest, chooseNetwork} from '../actions/bikesActions';
import {getFetchingState, getNetwork} from '../selectors/bikesSelectors';
import App from '../App';

const mapStateToProps = state => ({
	isFetching: getFetchingState(state),
	networks: getNetwork(state),
});

export default connect(mapStateToProps, {
	initNetworkRequest,
	chooseNetwork,
})(App);
