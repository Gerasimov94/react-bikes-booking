import {connect} from 'react-redux';
import Input from '../components/Input';
import {getNetworkFilter} from '../selectors/bikesSelectors';
import {changeNetworkFilter} from '../actions/bikesActions';

const mapStateToProps = state => ({
	value: getNetworkFilter(state),
});

export default connect(mapStateToProps, {
	onChange: changeNetworkFilter,
})(Input);
