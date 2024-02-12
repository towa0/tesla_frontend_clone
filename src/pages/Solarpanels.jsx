import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import solarBg from "../assets/images/solarPanelsbg.avif";

export default function SolarPanels() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={solarBg}
      ></img>
      <div className="relative z-10">
        <h1 className="text-lightText text-center mt-[6vh] text-5xl">
          Solar Panels
        </h1>
        <p className="text-lightText text-center mt-2 text-md underline">
          Schedule a Virtual Consultation
        </p>
        <p className="text-[#171a20] text-center mt-1 text-sm">
          After Federal Tax Credit & Est. Gas Savings
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
