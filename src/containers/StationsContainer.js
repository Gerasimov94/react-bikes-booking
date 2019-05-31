import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {getStationsByFilter} from '../selectors/bikesSelectors';
import {saveStation} from '../actions/bikesActions';

const mapStateToProps = state => ({
	network: getStationsByFilter(state),
});

export default connect(mapStateToProps, {saveStation})(Stations);
