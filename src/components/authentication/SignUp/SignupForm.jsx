import React, { useState } from "react";
import "../FormFields.scss";

const SignupForm = ({ toggleForm, showPassword, togglePasswordVisibility }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    toggleForm();
  };
  return (
    <div className="form signup_form">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="input_box">
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your Name"
            required
          />
          <i className="uil uil-envelope-alt email"></i>
        </div>
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
            placeholder="Create password"
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
        {/* <div className="input_box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            required
          />
          <i className="uil uil-lock password"></i>
          <i
            className={`uil ${
              showPassword ? "uil-eye" : "uil-eye-slash"
            } pw_hide`}
            onClick={togglePasswordVisibility}
          ></i>
        </div> */}
        <button className="button" type="submit">
          Signup Now
        </button>
        <div className="login_signup">
          Already have an account?
          <a href="#" onClick={toggleForm}>
            &nbsp; Login
          </a>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
