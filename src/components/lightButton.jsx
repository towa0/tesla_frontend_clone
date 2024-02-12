import React from "react";

export default function lightButton({ text }) {
  return (
    <>
      <button className="bg-lightButton bg-opacity-[90%] text-darkText px-8 py-2 w-[14vw] rounded-md font-bold">
        {text}
      </button>
    </>
  );
}
