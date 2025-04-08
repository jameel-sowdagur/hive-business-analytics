
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import UpcomingEvent from "../components/UpcomingEvent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
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
