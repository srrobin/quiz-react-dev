import React from "react";
const FormImgTitle = (props) => {
  return (
    <>
      <h3 className="login_title text-center ">{props.title}</h3>
      <img src={props.image} alt="" />
    </>
  );
};

export default FormImgTitle;
