import React, { useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";

import { carList } from "@/data/carList";
import Link from "next/link";

function RideSelector({ pickupx, dropoffx }) {
  const [rideDuration, setRideDuration] = useState();
  console.log(rideDuration);
  useEffect(() => {
    if (pickupx && dropoffx) {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupx[0]},${pickupx[1]};${dropoffx[0]},${dropoffx[1]}?access_token=pk.eyJ1IjoiYWxla3NhbmRycmUiLCJhIjoiY2xrdHFkZ2t1MDJrczNkbXF0bGNnOHF0eiJ9.6HjorEDx7EjGrpiy3xBvew`
      )
        .then((res) => res.json())
        .then((data) => setRideDuration(data.routes[0].duration / 100));
    }
  }, [pickupx, dropoffx]);
  return (
    <>
      <Link href="/search">
        <div className="absolute top-2 left-5 z-50  bg-white p-1 rounded-full">
          <WestIcon fontSize="large" />
        </div>
      </Link>
      <div className=" px-5  bg-slate-200 flex flex-col pb-5 h-3/5  items-center">
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
              {rideDuration ? (
                <h1>{"$" + (rideDuration * item.multiplier).toFixed(2)}</h1>
              ) : (
                <h1>price</h1>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-14 bg-black text-white flex justify-center items-center cursor-pointer mt-2  ">
          Confirm UberX
        </div>
      </div>
    </>
  );
}

export default RideSelector;
