import {connect} from 'react-redux';
import Input from '../components/Input';
import {getStationFilter} from '../selectors/bikesSelectors';
import {changeStationFilter} from '../actions/bikesActions';

const mapStateToProps = state => ({
	value: getStationFilter(state),
});

export default connect(mapStateToProps, {
	onChange: changeStationFilter,
})(Input);
