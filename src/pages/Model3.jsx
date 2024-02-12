import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import model3Bg from "../assets/images/model3bg.avif";

export default function Model3() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={model3Bg}
      ></img>
      <div className="relative z-10">
        <h1 className="text-darkText text-center mt-[6vh] text-5xl">Model 3</h1>
        <p className="text-darkText text-center mt-1 text-2xl">
          Lease starting at $329/mo*
        </p>
      </div>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        {/* Buttons container */}
        <div className="flex justify-center gap-4">
          <LightButton text="Custom Order" />
          <DarkButton text="Demo Drive" />
        </div>
        {/* Paragraph text under the buttons */}
        <p className="text-center text-sm pt-10 text-darkText">
          *Excludes taxes and fees with price subject to change. Available in
          select states.{" "}
          <span className="underline cursor-pointer">See Details</span>
        </p>
      </div>
    </div>
  );
}
