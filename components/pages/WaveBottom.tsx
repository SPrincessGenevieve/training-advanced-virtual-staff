import React from "react";
import Wave from "../Wave";
import Wave2 from "../Wave2";
import Wave3 from "../Wave3";

export default function WaveBottom() {
  return (
    <>
      <div className="absolute bottom-30 w-full flex opacity-80 z-0">
        <Wave></Wave>
      </div>
      <div className="absolute bottom-5 w-full flex opacity-80 z-0">
        <Wave2></Wave2>
      </div>
      <div className="absolute bottom-0 w-full flex opacity-80 z-0">
        <Wave3></Wave3>
      </div>
    </>
  );
}
