
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Image, Upload, X } from "lucide-react";

type GalleryImage = {
  id: string;
  url: string;
};

const Gallery = () => {
  // Sample gallery images
  const [images, setImages] = useState<GalleryImage[]>([
    { id: "img1", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    { id: "img2", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" },
    { id: "img3", url: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
    { id: "img4", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81" },
  ]);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check if already at maximum images (12 total)
    if (images.length >= 12) {
      alert("Maximum of 12 images allowed. Please delete an image before adding a new one.");
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

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-hive-amber">Gallery</span>
          </h2>
          <p className="text-hive-gray max-w-2xl mx-auto">
            Browse through our memorable moments and highlights.
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <div className="relative">
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              disabled={images.length >= 12}
            />
            <label
              htmlFor="upload-image"
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md bg-hive-amber text-white hover:bg-hive-gold transition-colors ${
                images.length >= 12 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Upload className="h-4 w-4" />
              Upload Image
              {images.length >= 12 && 
                <span className="ml-1 text-xs">(Max reached)</span>
              }
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={image.url}
                alt={`Gallery image ${image.id}`}
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
          {images.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <Image className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500">No images yet. Upload up to 12 images for your gallery.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
