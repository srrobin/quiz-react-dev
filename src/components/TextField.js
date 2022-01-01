import React from "react";

const TextField = ({ ...rest }) => {
  return (
    <div className="form-group ">
      <input className="form-control" {...rest} />
    </div>
  );
};

export default TextField;
