import React from "react";

const CheckBox = ({ id, className, text, ...rest }) => {
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={id}
        {...rest}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
