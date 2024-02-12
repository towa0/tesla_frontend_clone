import React from "react";

export default function darkButton({ text }) {
  return (
    <>
      <button className="bg-darkButton bg-opacity-[90%] text-lightText px-8 py-2 w-[14vw] rounded-md font-bold">
        {text}
      </button>
    </>
  );
}
