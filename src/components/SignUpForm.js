import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Form from "../components/Form";
import TextField from "../components/TextField";
import { useAuth } from "../Contexts/AuthContext";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  // let navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      // navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <TextField
        required
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        type="email"
        placeholder="Enter your  email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        type="password"
        placeholder="Enter  Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        required
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        required
        className="mb-3"
        id="w"
        text="I agree to the Terms &amp; Condition ."
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button
        disabled={loading}
        type="submit"
        text="Submit"
        className="btn-primary btn-block"
      />

      <div className="text-center mt-4">
        Already have an account ? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
