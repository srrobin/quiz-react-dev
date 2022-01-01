import React from "react";
import image from "../images/wr1.png";

const Summary = ({ obtainedMark, totaMark }) => {
  return (
    <div className="row">
      <div className="col-md-7 my-auto">
        <div className="quize_result text-cente d-flex align-items-center justify-content-center">
          <h4>
            your result is: <br /> {obtainedMark} out of {totaMark}
          </h4>
        </div>
      </div>
      <div className="col-md-5">
        <div className="result_image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
