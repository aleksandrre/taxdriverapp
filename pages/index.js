import Map from "./components/Map";
import Image from "next/image";
import logo from "../public/images/logo.png";
import camry from "../public/images/camry.png";
import bicycle from "../public/images/bicycle.jpeg";
import reserve from "../public/images/reserve.png";

import Link from "next/link";

import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const data = [
  { url: camry, title: "Ride" },
  { url: bicycle, title: "2-Wheels" },
  { url: reserve, title: "Reserve" },
];
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  return (
    <div className="flex flex-col h-screen ">
      <Map />
      <div className="flex-1  px-5  bg-slate-500 relative   ">
        <div className="flex justify-between items-center pt-9 ">
          <Image src={logo} alt="logo" className="rounded-full w-20  " />
          <div className="flex flex-col items-center   gap-2 ">
            <h2 className=" text-white font-bold ">{user && user.name}</h2>
            <div className="w-10 h-10 rounded-full ">
              <img
                src={user && user.photoURL}
                alt="avatar"
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div
            onClick={() => signOut(auth)}
            className="   text-white font-bold flex justify-center items-center bg-slate-700 p-2 cursor-pointer rounded-lg hover:bg-slate-50 hover:text-black "
          >
            sign out
          </div>
        </div>
        <div className="flex justify-between  gap-3 py-7 ">
          {data.map((item, index) => {
            if (index == 0) {
              return (
                <Link
                  href={{
                    pathname: "/search",
                    query: { inputValue: inputValue },
                  }}
                  key={index}
                >
                  <div className="bg-white w-full flex flex-col items-center justify-center w-36  h-24 rounded-2xl   bg-slate-50   transition-all   hover:scale-105 cursor-pointer md:hover:scale-95       ">
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
                  className="bg-white w-full flex flex-col items-center justify-center w-36  h-24 rounded-2xl   bg-slate-50   transition-all   hover:scale-105 cursor-pointer  md:hover:scale-95       "
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
            onChange={(e) => setInputValue(e.target.value)}
            type="text "
            className="w-full h-full bg placeholder:text-slate-700 placeholder:font-bold px-6 border-none rounded-2xl"
            placeholder="Where to?"
          />
        </div>
      </div>
    </div>
  );
}
