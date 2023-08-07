import Image from "next/image";
import React, { useEffect } from "react";
import logo2 from "../public/images/logo2.png";
import tax from "../public/images/tax.jpeg";

import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
function login() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <div className=" flex flex-col p-5 ">
      <Image src={logo2} className="w-32  " />
      <p className="text-gray-500  text-4xl px-3 ">
        Log in to access your account
      </p>
      <Image src={tax} className="py-6 px-3 max-h-[500px]  " />
      <div
        onClick={() => signInWithPopup(auth, provider)}
        className="w-full bg-black text-white flex justify-center items-center p-3 cursor-pointer "
      >
        Sign in with Google
      </div>
    </div>
  );
}

export default login;
