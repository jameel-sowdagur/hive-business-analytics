
import React from "react";

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-48 h-48 flex justify-center items-center">
        {/* Main logo with glowing effect */}
        <img 
          src="/lovable-uploads/eaaf9e19-d75f-463b-a023-12cb90e1d77c.png" 
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
