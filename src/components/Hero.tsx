
import React from "react";
import { BarChart2, TrendingUp, PieChart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:py-32 lg:py-48 overflow-hidden honeycomb-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hive-blue">
              Revolutionize Your Business with 
              <span className="text-hive-amber"> AI-Powered </span> Data Insights
            </h1>
            <p className="text-lg md:text-xl text-hive-gray max-w-lg">
              Hive Business Analytics helps organizations unlock the power of their data,
              delivering actionable insights that drive growth and innovation.
            </p>
            
            
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-hive-amber/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-6 z-10">
              <div className="animate-float delay-100">
                <div className="hexagon bg-white shadow-lg p-6 flex flex-col items-center justify-center h-48">
                  <BarChart2 size={48} className="text-hive-amber mb-4" />
                  <h3 className="font-semibold text-hive-gray">Performance Analytics</h3>
                </div>
              </div>
              <div className="animate-float delay-300 mt-12">
                <div className="hexagon bg-white shadow-lg p-6 flex flex-col items-center justify-center h-48">
                  <TrendingUp size={48} className="text-hive-blue mb-4" />
                  <h3 className="font-semibold text-hive-gray">Growth Strategies</h3>
                </div>
              </div>
              <div className="animate-float delay-500 -mt-12">
                <div className="hexagon bg-white shadow-lg p-6 flex flex-col items-center justify-center h-48">
                  <PieChart size={48} className="text-hive-gold mb-4" />
                  <h3 className="font-semibold text-hive-gray">Market Research</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
