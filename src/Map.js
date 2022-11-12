import { GoogleMap, useLoadScript, } from '@react-google-maps/api'
import React from 'react'


const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: 37.7749,
    lng : -122.4194,
};

export default function Map() {



    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAEDd9dKasrXfKiKJT3RrDyzvzADacz1MI",
    });

    if (loadError) return "Error loading Map"
    if (!isLoaded) return "Loading Maps"


  return (
    <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}>
        </GoogleMap>
    </div>
  )
}
