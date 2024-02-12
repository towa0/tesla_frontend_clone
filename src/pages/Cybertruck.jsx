import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import CyberBg from "../assets/images/CybertruckBg.avif";

export default function CyberTruck() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={CyberBg}
      ></img>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        <div className="flex justify-center gap-4">
          <LightButton text="Order Now" />
          <DarkButton text="Demo Drive" />
        </div>
      </div>
    </div>
  );
}
