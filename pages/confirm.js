import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import { useRouter } from "next/router";

import RideSelector from "./components/RideSelector";

function confirm() {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickupx, setPickupx] = useState();
  const [dropoffx, setDropoffx] = useState();

  const getPickupCoordinate = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxla3NhbmRycmUiLCJhIjoiY2xrdHFkZ2t1MDJrczNkbXF0bGNnOHF0eiJ9.6HjorEDx7EjGrpiy3xBvew",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupx(data.features[0]?.center);
      });
  };
  const getDropoffCoordinate = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxla3NhbmRycmUiLCJhIjoiY2xrdHFkZ2t1MDJrczNkbXF0bGNnOHF0eiJ9.6HjorEDx7EjGrpiy3xBvew",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffx(data.features[0]?.center);
      });
  };
  useEffect(() => {
    getPickupCoordinate(pickup);
    getDropoffCoordinate(dropoff);
  }, [pickup, dropoff]);

  return (
    <div className="flex flex-col h-screen relative  ">
      <Map pickupx={pickupx} dropoffx={dropoffx} />
      <RideSelector pickupx={pickupx} dropoffx={dropoffx} />
    </div>
  );
}

export default confirm;
