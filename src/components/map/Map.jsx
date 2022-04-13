import { GoogleMap, Marker } from "@react-google-maps/api";
//Router
import { useNavigate } from "react-router-dom";

import "./Map.css";

const Map = ({ spots, spotDetails }) => {
  const navigate = useNavigate();

  console.log(spots);
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 19.42847, lng: -99.12766 }}
      mapContainerClassName="map"
    >
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={{ lat: spot.latitude, lng: spot.longitude }}
          onClick={() => {
            spotDetails(spot.id);
            navigate(`/invoices/${spot.id}`);
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
