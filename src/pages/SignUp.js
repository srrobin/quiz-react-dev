import React from "react";
import FormImgTitle from "../components/FormImgTitle";
import SignUpForm from "../components/SignUpForm";
import image from "../images/l1.png";

const SignUp = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <FormImgTitle title="Signup to your account" image={image} />
      </div>
      <div className="col-md-5">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
