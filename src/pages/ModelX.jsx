import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import modelXBg from "../assets/images/ModelXbg.avif";

export default function ModelX() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={modelXBg}
      ></img>
      <div className="relative z-10">
        <h1 className="text-darkText text-center mt-[6vh] text-5xl">Model X</h1>
        <p className="text-darkText text-center mt-1 text-2xl">From $68,590*</p>
        <p className="text-[#171a20] text-center mt-1 text-sm">
          After Federal Tax Credit & Est. Gas Savings
        </p>
      </div>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        {/* Buttons container */}
        <div className="flex justify-center gap-4">
          <LightButton text="Custom Order" />
          <DarkButton text="Demo Drive" />
        </div>
        {/* Paragraph text under the buttons */}
        <p className="text-center text-sm pt-10 text-lightText">
          *Price before incentives and savings is $79,990, excluding taxes and
          fees. Subject to change.
        </p>
        <p className="underline cursor-pointer text-center text-sm text-lightText">
          Learn about est. gas savings.
        </p>
      </div>
    </div>
  );
}
