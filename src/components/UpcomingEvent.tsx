
import React, { useState } from "react";

const UpcomingEvent = () => {
  const [eventImage, setEventImage] = useState("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d");
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setEventImage(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section id="upcoming-event" className="py-16 bg-hive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hive-gray mb-8">
          Upcoming Event
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg relative">
            <img 
              src={eventImage} 
              alt="Event Poster" 
              className="w-full h-auto object-cover"
            />
            <label htmlFor="poster-upload" className="absolute bottom-4 right-4 bg-hive-amber hover:bg-hive-gold text-white font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer">
              Upload Poster
            </label>
            <input 
              id="poster-upload"
              type="file" 
              accept="image/*" 
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-hive-amber hover:bg-hive-gold text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
