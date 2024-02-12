import React from "react";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";
import powerWall from "../assets/images/powerWallbg.avif";

export default function PowerWall() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <img
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={powerWall}
      ></img>
      <div className="relative z-10">
        <h1 className="text-darkText text-center mt-[6vh] text-5xl">
          PowerWall
        </h1>
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
