import React from "react";
import GoogleMapReact from 'google-map-react';
// import RoomIcon from '@mui/icons-material/Room';
import { MdLocationOn } from "react-icons/md";



const AnyReactComponent = ({ text }) => <MdLocationOn  size={70}/>

export default function MapContainer({lat,lng}){
  const defaultProps = {
    center: {
      lat: lat || 13.0418,
      lng: lng || 80.2341
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDf8SPEjHyV2KQITM_dvxXxsVI0G1DPLPQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={lat || 13.0418}
          lng={lng || 80.2341}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}