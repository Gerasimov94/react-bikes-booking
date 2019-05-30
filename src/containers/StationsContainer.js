import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {getSelectedNetwork} from '../selectors/bikesSelectors';
import {saveStation} from '../actions/bikesActions';

const mapStateToProps = state => ({
	network: getSelectedNetwork(state),
});

export default connect(mapStateToProps, {saveStation})(Stations);
