import React from "react";

import image80 from "../../assets/image/studio/studio.avif";
import image90 from "../../assets/image/studio/studio2.avif";
import image100 from "../../assets/image/studio/TRGOW2.avif";

const Studio = () => {
  return (
    <div className="boxes-container">
      <div className="box">
        <img src={image90} />
        <p>Made From Nature</p>
      </div>
      <div className="box">
        <img src={image80} />
        <p>Barefoot Feel</p>
      </div>
      <div className="box">
        <img src={image100} />
        <p>Easy to Clean</p>
      </div>
    </div>
  );
};

export default Studio;
