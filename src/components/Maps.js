import React from 'react';
import PropTypes from 'prop-types';

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
import {API_KEY} from '../constants/bikesConstants';

const Maps = withScriptjs(withGoogleMap((
	{station: {latitude: lat, longitude: lng}},
	isMarkerShown
) => (
	<GoogleMap
		defaultZoom={15}
		center={{lat, lng}}
	>
		{isMarkerShown && <Marker position={{lat, lng}} />}
	</GoogleMap>
)));

Maps.propTypes = {
	network: PropTypes.shape({
		location: {
			latitude: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
			longitude: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
		},
	}),
	isMarkerShown: PropTypes.bool,
	googleMapURL: PropTypes.string,
	containerElement: PropTypes.node,
	loadingElement: PropTypes.node,
	mapElement: PropTypes.node,
};

const element = <div style={{height: '100%'}} />;

Maps.defaultProps = {
	isMarkerShown: true,
	googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
	loadingElement: element,
	containerElement: <div className='maps-container' />,
	mapElement: element,
};

export default Maps;
