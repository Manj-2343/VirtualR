import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
    setIsAuthChecked(true);
  }, []);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-in"
              element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected routes */}
            <Route
              path="/feature"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <FeatureSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/workflow"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Workflow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Pricing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/testimonial"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Testimonials />
                </ProtectedRoute>
              }
            />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
