import React from "react";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="alert alert-secondary" role="alert">
          <CheckBox id="1" text="i love bangladesh " />
        </div>
      </div>
    </div>
  );
};

export default Answers;
