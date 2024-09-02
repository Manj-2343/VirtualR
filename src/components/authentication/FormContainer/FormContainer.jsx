import React, { useState } from "react";
import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";
import "./FormContainer.scss";
import "../Home.scss";

const FormContainer = ({ isActive, closeForm }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="home">
      <div className={`form_container ${isActive ? "show" : ""}`}>
        <i className="uil uil-times form_close" onClick={closeForm}></i>
        {isSignup ? (
          <SignupForm
            toggleForm={() => setIsSignup(false)}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        ) : (
          <LoginForm
            toggleForm={() => setIsSignup(true)}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        )}
      </div>
    </section>
  );
};

export default FormContainer;
