import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import solarBg from "../assets/images/solarRoofbg.avif";

export default function SolarRoof() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={solarBg}
      ></img>
      <div className="relative z-10">
        <h1 className="text-darkText text-center mt-[6vh] text-5xl">
          SolarRoof
        </h1>
        <p className="text-darkText text-center mt-2 text-md ">
          Produce Clean Energy From Your Roof
        </p>
      </div>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        <div className="flex justify-center gap-4">
          <LightButton text="Order Now" />
          <DarkButton text="Learn More" />
        </div>
      </div>
    </div>
  );
}
