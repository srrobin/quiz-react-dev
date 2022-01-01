import React from "react";

const Button = ({ icon, text, className, ...rest }) => {
  return (
    <button className={`btn ${className}`} {...rest}>
      {text} {icon}
    </button>
  );
};

export default Button;
