import React from "react";
import LightButton from "../components/lightButton";
import accessories from "../assets/images/Accessories.avif";

export default function Accessories() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={accessories}
      ></img>
      <div className="relative z-10">
        <h1 className="text-darkText text-center mt-[6vh] text-5xl">
          Accessories
        </h1>
      </div>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        <div className="flex justify-center gap-4">
          <LightButton text="Shop Now" />
        </div>
      </div>
    </div>
  );
}
