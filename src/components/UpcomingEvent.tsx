
import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const UpcomingEvent = () => {
  return (
    <section id="upcoming-event" className="py-16 bg-hive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hive-gray mb-8">
          Upcoming Event
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="AI Workshop" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-hive-blue mb-4">
              AI-Powered Analytics Workshop
            </h3>
            
            <div className="space-y-4 text-hive-gray">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-3 text-hive-amber" />
                <div>
                  <span className="font-semibold">Date:</span> June 15, 2024
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-hive-amber" />
                <div>
                  <span className="font-semibold">Time:</span> 9:00 AM - 4:00 PM
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-hive-amber" />
                <div>
                  <span className="font-semibold">Location:</span> Labourdonnais Waterfront Hotel, Port Louis
                </div>
              </div>
              
              <p className="pt-4">
                Join us for a comprehensive workshop on leveraging AI and machine learning for 
                business analytics. Learn how to transform your data into actionable insights
                and drive your business forward with cutting-edge technologies.
              </p>
              
              <div className="pt-2">
                <button className="bg-hive-amber hover:bg-hive-gold text-white font-semibold px-6 py-2 rounded-md transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
