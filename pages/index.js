import Map from "./components/Map";
import Image from "next/image";
import logo from "../public/logo.png";
import camry from "../public/camry.png";
import bicycle from "../public/bicycle.jpeg";
import reserve from "../public/reserve.png";

import avatar22 from "../public/images/avatar22.png";
import Link from "next/link";

const data = [
  { url: camry, title: "Ride" },
  { url: bicycle, title: "2-Wheels" },
  { url: reserve, title: "Reserve" },
];
export default function Home() {
  return (
    <div className="flex flex-col h-screen ">
      <Map />
      <div className="flex-1  px-5  bg-slate-500    ">
        <div className="flex justify-between items-center pt-8 ">
          <Image src={logo} alt="logo" className="rounded-full w-20  " />
          <div className="flex items-center gap-5">
            <h2 className="ml-10  ">Taxi Driver</h2>
            <div className="w-10 h-10 rounded-full ">
              <Image src={avatar22} alt="avatar" className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between  gap-3 py-7 ">
          {data.map((item, index) => {
            if (index == 0) {
              return (
                <Link href="/search" key={index}>
                  <div className="bg-white w-full flex flex-col items-center justify-center w-36  h-24 rounded-2xl   bg-slate-50   transition-all   hover:scale-105 cursor-pointer        ">
                    <Image
                      src={item.url}
                      alt="item"
                      className="  h-[40%]  object-contain "
                    />
                    <h1>{item.title}</h1>
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  key={index}
                  className="bg-white w-full flex flex-col items-center justify-center w-36  h-24 rounded-2xl   bg-slate-50   transition-all   hover:scale-105 cursor-pointer        "
                >
                  <Image
                    src={item.url}
                    alt="item"
                    className="  h-[40%]  object-contain "
                  />
                  <h1>{item.title}</h1>
                </div>
              );
            }
          })}
        </div>
        <div className="w-full bg-white rounded-2xl   h-16  ">
          <input
            type="text "
            className="w-full h-full bg placeholder:text-slate-700 placeholder:font-bold px-6 border-none rounded-2xl"
            placeholder="Where to?"
          />
        </div>
      </div>
    </div>
  );
}
