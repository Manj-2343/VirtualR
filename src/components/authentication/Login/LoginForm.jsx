import React, { useState } from "react";
import "../FormFields.scss";
//import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleForm, showPassword, togglePasswordVisibility }) => {
  // const navigate = useNavigate();
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
      // navigate("/");
    } else {
      alert("Wrong Email Address");
    }
  };
  return (
    <div className="form login_form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input_box">
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
          <i className="uil uil-envelope-alt email"></i>
        </div>
        <div className="input_box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your password"
            required
          />
          <i className="uil uil-lock password"></i>
          <i
            className={`uil ${
              showPassword ? "uil-eye" : "uil-eye-slash"
            } pw_hide`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="option_field">
          <span className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </span>
          <a href="#" className="forgot_pw">
            Forgot password?
          </a>
        </div>
        <button className="button">Login Now</button>
        <div className="login_signup">
          Don't have an account?{" "}
          <a href="#" onClick={toggleForm}>
            Signup
          </a>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
