import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import AddIcon from "@mui/icons-material/Add";
import StarRateIcon from "@mui/icons-material/StarRate";
import Link from "next/link";
function search() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="w-full p-5 bg-whiteh-96 flex flex-col  ">
      <Link href="/">
        <WestIcon fontSize="large" />
      </Link>

      <div className="flex justify-between items-center py-2 px-3 ">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-400"></div>
          <div className="w-0.5  h-11   rounded-full   bg-slate-500   "></div>
          <div className="w-2 h-2    bg-black "></div>
        </div>
        <div className="flex flex-col gap-4 w-full px-4 ">
          <div className="w-full  h-10">
            <input
              value={pickup}
              type="text"
              placeholder="Enter pickup location"
              className="w-full bg-slate-200 h-full p-2"
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="w-full  h-10">
            <input
              value={dropoff}
              type="text"
              placeholder="Where to?"
              className="w-full  bg-slate-200 h-full p-2"
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
        </div>
        <div className="w-10 h-10 bg-slate-300 rounded-full flex justify-center items-center">
          <AddIcon fontSize="large" />
        </div>
      </div>
      <hr className="w-full h-2 bg-slate-200" />
      <div className="flex  items-center m-1 h-14 gap-2  ">
        <div className="w-10 h-10 bg-slate-500 rounded-full flex justify-center items-center text-black">
          <StarRateIcon fontSize="large" className="text-white" />
        </div>
        <h2>Saved Places</h2>
      </div>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <div className="m-1 w-full h-12 bg-black text-white flex justify-center items-center  ">
          <h4 className="font-bold tracking-wide ">Confirm Location</h4>
        </div>
      </Link>
    </div>
  );
}

export default search;
