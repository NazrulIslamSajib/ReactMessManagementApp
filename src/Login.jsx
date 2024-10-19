import React, { useState } from "react";

const Login = ({ onSubmit, attempts }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Welcome to our Bachelor's Software</h2>
      <label>Please Enter Password: sajib</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Submit</button>
      {attempts >= 10 && <p className="error-message">Too many attempts, try again later!</p>}
    </form>
  );
};

export default Login;
