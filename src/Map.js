import { GoogleMap, useLoadScript, } from '@react-google-maps/api'
import React from 'react'

export default function Map() {

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
    };
    
    const center = {
        lat: 37.7809841,
        lng : -122.4132879,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAEDd9dKasrXfKiKJT3RrDyzvzADacz1MI",
    });

    if (loadError) return "Error loading Map"
    if (!isLoaded) return "Loading Maps"


  return (
    <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={20}
            center={center}>
        </GoogleMap>
    </div>
  )
}
