import React from "react";
import bgVid from "../assets/images/HomepageVid.mp4";
import Navbar from "../components/Navbar";
import DarkButton from "../components/darkButton";
import LightButton from "../components/lightButton";

const ModelY = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 z-0 w-full h-full object-cover"
        src={bgVid}
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Navbar />
        <h1 className="text-lightText text-center mt-[6vh] text-5xl">
          Model Y
        </h1>
        <p className="text-lightText text-center mt-1 text-2xl">
          Lease starting at $379/mo*
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
          *Excludes taxes and fees with price subject to change. Available in
          select states.{" "}
          <span className="underline cursor-pointer">See Details</span>
        </p>
      </div>
    </div>
  );
};

export default ModelY;
