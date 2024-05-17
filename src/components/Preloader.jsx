import React from "react";
import { Logo } from "./Icons";

export default function Preloader() {
  return (
    <>
      <div className=" min-h-screen fixed flex justify-center items-center left-0 right-0 bg-black w-fill">
         <span className="animate-spin"> <Logo /></span>
          <p className="font-bold text-[24px] text-white ms-4">
            Invest GPT
          </p>
      </div>
    </>
  );
}
