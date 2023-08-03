import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import { useRouter } from "next/router";

import { carList } from "@/data/carList";

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
  //   {
  //     console.log("drop" + dropoffx, "pick" + pickupx);
  //   }
  return (
    <div className="flex flex-col h-screen ">
      <Map pickupx={pickupx} dropoffx={dropoffx} />
      <div className=" px-5  bg-slate-200 flex flex-col pb-5 h-2/3 items-center">
        <h1 className="text-slate-600  ">
          Choose a ride, or swipe up for more
        </h1>
        <div className="flex-1 flex flex-col  gap-3 w-full overflow-y-scroll">
          {carList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between  items-center h-20 rounded-3xl px-2   hover:bg-slate-600 duration-300   "
            >
              <div className="gap-3 flex items-center ">
                <img src={item.imgUrl} width={75} height={75} />
                <div className="flex flex-col  ">
                  <h1>{item.service}</h1>
                  <h2 className="text-blue-500 "> 5 min away</h2>
                </div>
              </div>
              <h1>24$</h1>
            </div>
          ))}
        </div>

        <div className="w-full h-14 bg-black text-white flex justify-center items-center  ">
          Confirm UberX
        </div>
      </div>
    </div>
  );
}

export default confirm;
