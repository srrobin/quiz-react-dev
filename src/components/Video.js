import React from "react";
import image from "../images/2.jpg";
const Video = () => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={image} alt="" className="learn_content_image" />
      <div className="card-body">
        <h5 className="card-title">Special title treatment bangladesh topic</h5>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">4 questions</small>
          <small className="text-muted">total point: 20</small>
        </div>
      </div>
    </div>
  );
};

export default Video;
