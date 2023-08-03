import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxla3NhbmRycmUiLCJhIjoiY2xrdHFkZ2t1MDJrczNkbXF0bGNnOHF0eiJ9.6HjorEDx7EjGrpiy3xBvew";

function Map({ pickupx, dropoffx }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (pickupx) {
      addToMap(map, pickupx);
    }
    if (dropoffx) {
      addToMap(map, dropoffx);
    }
    if (pickupx && dropoffx) {
      map.fitBounds([pickupx, dropoffx], {
        padding: 60,
      });
    }
  }, [pickupx, dropoffx]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className=" flex-1 w-full h-1/3 " id="map"></div>;
}

export default Map;
