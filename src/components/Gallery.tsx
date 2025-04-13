
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Image, Upload, X } from "lucide-react";

type GalleryImage = {
  id: string;
  url: string;
  eventId: string;
};

type Event = {
  id: string;
  name: string;
  date: string;
};

const Gallery = () => {
  // Default events
  const [events, setEvents] = useState<Event[]>([
    { id: "event1", name: "Annual Conference 2023", date: "May 15, 2023" },
    { id: "event2", name: "Business Workshop", date: "July 20, 2023" },
    { id: "event3", name: "Networking Mixer", date: "September 5, 2023" },
  ]);

  // Sample gallery images
  const [images, setImages] = useState<GalleryImage[]>([
    { id: "img1", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", eventId: "event1" },
    { id: "img2", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", eventId: "event1" },
    { id: "img3", url: "https://images.unsplash.com/photo-1500673922987-e212871fec22", eventId: "event2" },
    { id: "img4", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", eventId: "event3" },
  ]);

  const [newEventName, setNewEventName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(events[0].id);
  const [showEventForm, setShowEventForm] = useState(false);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, eventId: string) => {
    const currentEventImages = images.filter(img => img.eventId === eventId);
    
    // Check if already at maximum images (3) for this event
    if (currentEventImages.length >= 3) {
      alert("Maximum of 3 images allowed per event. Please delete an image before adding a new one.");
      return;
    }
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          const newImage: GalleryImage = {
            id: `img-${Date.now()}`,
            url: event.target.result,
            eventId,
          };
          
          setImages([...images, newImage]);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleDeleteImage = (imageId: string) => {
    setImages(images.filter(img => img.id !== imageId));
  };

  // Add new event
  const handleAddEvent = () => {
    if (newEventName.trim() === "") return;
    
    const newEvent: Event = {
      id: `event-${Date.now()}`,
      name: newEventName,
      date: new Date().toLocaleDateString(),
    };
    
    setEvents([...events, newEvent]);
    setSelectedEvent(newEvent.id);
    setNewEventName("");
    setShowEventForm(false);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-hive-amber">Gallery</span>
          </h2>
          <p className="text-hive-gray max-w-2xl mx-auto">
            Browse through our events and memorable moments. Select an event to view its photos.
          </p>
        </div>

        <Tabs defaultValue={selectedEvent} onValueChange={setSelectedEvent} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <ScrollArea className="w-[80%]">
              <TabsList className="h-12">
                {events.map((event) => (
                  <TabsTrigger
                    key={event.id}
                    value={event.id}
                    className="px-4 py-2 data-[state=active]:bg-hive-amber data-[state=active]:text-white"
                  >
                    {event.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            
            <Button
              variant="outline"
              className="border-hive-amber text-hive-amber"
              onClick={() => setShowEventForm(!showEventForm)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              New Event
            </Button>
          </div>

          {showEventForm && (
            <div className="mb-6 p-4 bg-gray-50 rounded-md flex items-center gap-2">
              <input
                type="text"
                placeholder="Event Name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                value={newEventName}
                onChange={(e) => setNewEventName(e.target.value)}
              />
              <Button onClick={handleAddEvent}>Add Event</Button>
              <Button variant="ghost" onClick={() => setShowEventForm(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {events.map((event) => (
            <TabsContent key={event.id} value={event.id} className="p-1">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{event.name} <span className="text-hive-gray text-sm ml-2">{event.date}</span></h3>
                
                <div className="relative">
                  <input
                    type="file"
                    id={`upload-${event.id}`}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, event.id)}
                    disabled={images.filter(img => img.eventId === event.id).length >= 3}
                  />
                  <label
                    htmlFor={`upload-${event.id}`}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md bg-hive-amber text-white hover:bg-hive-gold transition-colors ${
                      images.filter(img => img.eventId === event.id).length >= 3 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Image
                    {images.filter(img => img.eventId === event.id).length >= 3 && 
                      <span className="ml-1 text-xs">(Max reached)</span>
                    }
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images
                  .filter(img => img.eventId === event.id)
                  .map((image) => (
                    <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
                      <img
                        src={image.url}
                        alt={`Event image ${image.id}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <Button
                          variant="destructive"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => handleDeleteImage(image.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                {images.filter(img => img.eventId === event.id).length === 0 && (
                  <div className="col-span-3 py-12 text-center">
                    <Image className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-500">No images yet. Upload up to 3 images for this event.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
