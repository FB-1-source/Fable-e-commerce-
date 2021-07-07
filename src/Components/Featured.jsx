import React from "react";
import f1 from "../images/f1.jpeg";
import f2 from "../images/f2.jpeg";

const Featured = () => {
  return (
    <div>
      <div className="toptag">
        <h1>Featured Styles</h1>
      </div>
      <div className="imgsfea">
        <img className="f1" src={f1} alt="jordan 1 banned"></img>
        <img className="f2" src={f2} alt="dunks"></img>
      </div>
    </div>
  );
};

export default Featured;
