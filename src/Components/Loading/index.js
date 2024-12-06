import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./index.css";

function Loading() {
  return (
    <div className="loader-container">
      <ColorRing
        visible={true}
        height={120}
        width={120}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <h1 className="loader-heading">Please wait!</h1>
    </div>
  );
}

export default Loading;
