import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Wrong Email Address");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="input-box">
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
