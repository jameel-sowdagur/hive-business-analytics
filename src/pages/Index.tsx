
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import UpcomingEvent from "../components/UpcomingEvent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedLogo from "../components/AnimatedLogo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Logo section with full-width background strip */}
      <div className="w-full bg-hive-lightgray pt-24 pb-8">
        <AnimatedLogo />
      </div>
      
      <main>
        <Hero />
        <Services />
        <About />
        <UpcomingEvent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
