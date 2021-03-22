import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const location = {
  lat: 23.746859,
  lng: 90.375566,
};

function Direction(origin, destination) {
  const [directionsResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey={"AIzaSyAkgFK29GAN6A4ZQ6DwnB677Dt8dvT-gHs"}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>

        {
            origin !== '' && destination !=='' && <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            // required
            callback={(res) => {
              if (res != null) {
                setDirectionResponse(res);
              }
            }}
          />
        }

        {directionsResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionsResponse,
            }}
          />
        )}
        
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Direction);
