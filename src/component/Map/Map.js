import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Direction from '../Direction/Direction';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const location = {
  lat: 23.746859,
  lng: 90.375566
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={'AIzaSyAkgFK29GAN6A4ZQ6DwnB677Dt8dvT-gHs'}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Direction />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)