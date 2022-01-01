import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import FormImgTitle from "../components/FormImgTitle";
import TextField from "../components/TextField";
import image from "../images/l8.png";

const Login = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <FormImgTitle title="Login to your account" image={image} />
      </div>

      <div className="col-md-5">
        <Form>
          <TextField type="email" placeholder="Enter email" />
          <TextField type="password" placeholder="Password" />
          <Button
            className="btn-primary btn-block"
            type="submit"
            text="Submit"
          />
        </Form>
        <div class="text-center mt-4">
          Don't have an account ? <a href="signup.html">Sign Up</a> instead
        </div>
      </div>
    </div>
  );
};

export default Login;
