
import React, { useEffect, useRef } from "react";

const AnimatedLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;
    
    let rotation = 0;
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save the current state
      ctx.save();
      
      // Move to center of canvas for rotation
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      
      // Hexagon background
      ctx.beginPath();
      const hexRadius = 85;
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = hexRadius * Math.cos(angle);
        const y = hexRadius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(-hexRadius, -hexRadius, hexRadius, hexRadius);
      gradient.addColorStop(0, "#1E3A8A"); // hive-blue
      gradient.addColorStop(1, "#F6A700"); // hive-amber
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw text
      ctx.fillStyle = "white";
      ctx.font = "bold 60px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("HBA", 0, 0);
      
      // Add a subtle glow effect
      ctx.shadowColor = "#F6A700";
      ctx.shadowBlur = 15;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white";
      ctx.strokeText("HBA", 0, 0);
      
      // Restore the state
      ctx.restore();
      
      // Update rotation
      rotation += 0.01;
      
      // Request next frame
      requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup function
    return () => {
      // No cleanup needed for canvas
    };
  }, []);
  
  return (
    <div className="flex justify-center items-center py-8">
      <canvas 
        ref={canvasRef} 
        className="cursor-pointer animate-pulse" 
        style={{ width: "200px", height: "200px" }}
      ></canvas>
    </div>
  );
};

export default AnimatedLogo;
