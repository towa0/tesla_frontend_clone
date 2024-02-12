import React from "react";
import bgVid from "../assets/images/HomepageVid.mp4";
import DemoButton from "../components/demoButton";

const DemoDrive = () => {
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
        <h1 className="text-lightText text-center mt-[6vh] text-5xl">
          Expierence Tesla
        </h1>
        <p className="text-lightText text-center mt-2 text-xl">
          Schedule a Demo Drive Today
        </p>
      </div>
      <div className="relative w-full z-10 mt-[80vh] mb-[5vh] flex flex-col items-center">
        <div className="flex justify-center gap-4">
          <DemoButton text="Demo Drive" />
        </div>
      </div>
    </div>
  );
};

export default DemoDrive;
