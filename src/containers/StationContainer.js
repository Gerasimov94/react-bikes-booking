import {connect} from 'react-redux';
import Station from '../components/Station';
import {getSelectedStation} from '../selectors/bikesSelectors';
import {saveStation} from '../actions/bikesActions';

const mapStateToProps = state => ({
	station: getSelectedStation(state),
});

export default connect(mapStateToProps, {saveStation})(Station);
