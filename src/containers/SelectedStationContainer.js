import {connect} from 'react-redux';
import SelectedStation from '../components/SelectedStation';
import {getSelectedStation, getSelectedNetwork} from '../selectors/bikesSelectors';

const mapStateToProps = state => ({
	station: getSelectedStation(state),
	network: getSelectedNetwork(state),
});

export default connect(mapStateToProps)(SelectedStation);
