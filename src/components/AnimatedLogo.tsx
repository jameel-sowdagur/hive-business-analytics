
import React from "react";

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-64 h-64 flex justify-center items-center">
        {/* Main logo with glowing effect */}
        <img 
          src="/lovable-uploads/e289ba76-b781-429e-8ca2-484bc2057390.png" 
          alt="Hive Business Analytics Logo" 
          className="z-10 w-full h-full object-contain drop-shadow-lg"
        />
        
        {/* Outer glow effect */}
        <div className="absolute inset-0 -z-10 bg-hive-gold/20 rounded-full blur-xl animate-pulse"></div>
        
        {/* Inner glow effect */}
        <div className="absolute inset-4 -z-10 bg-hive-amber/30 rounded-full blur-md"></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
