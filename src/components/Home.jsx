import React from "react";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Workflow from "./Workflow";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
