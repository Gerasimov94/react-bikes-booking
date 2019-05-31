import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
	static propTypes = {
		value: PropTypes.string,
		isDisabled: PropTypes.bool,
		onChange: PropTypes.func,
		width: PropTypes.number,
		height: PropTypes.number,
	}

	static defaultProps = {
		value: '',
		isDisabled: false,
		onChange: () => {},
		width: 230,
		height: 40,
	}

	onChange = (event) => {
		const {onChange} = this.props;

		onChange(event.target.value);
	};

	render() {
		const {value, isDisabled, width, height} = this.props;

		return (
			<input
				className='input'
				value={value}
				disabled={isDisabled}
				onChange={this.onChange}
				style={{width, height}}
			/>
		);
	}
}
