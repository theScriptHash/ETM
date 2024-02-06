import React from "react";
import currentLocation from "../Media/currentLocation.jpeg";

export default function CurrLocation() {
  return (
    <div>
      <div className="myLocation">
        <img src={currentLocation} alt="myLocation" />
      </div>
    </div>
  );
}
