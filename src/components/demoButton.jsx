import React from "react";

export default function demoButton({ text }) {
  return (
    <>
      <button className="bg-transparent hover:bg-lightText hover:text-darkText border-[4px] border-lightText text-lightText px-8 py-2 w-[14vw] rounded-md font-bold">
        {text}
      </button>
    </>
  );
}
