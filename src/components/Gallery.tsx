
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Image, Upload, X, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

type GalleryImage = {
  id: string;
  url: string;
};

type GalleryTab = {
  id: string;
  name: string;
  images: GalleryImage[];
};

const Gallery = () => {
  // State for tabs
  const [tabs, setTabs] = useState<GalleryTab[]>([
    { id: "tab1", name: "", images: [] }
  ]);
  
  // State for active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // State for tab name editing
  const [editingTabName, setEditingTabName] = useState<string | null>(null);
  const [tabNameInput, setTabNameInput] = useState("");

  // Handle image upload for specific tab
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, tabId: string) => {
    // Find the tab
    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    
    if (tabIndex === -1) return;
    
    // Check if already at maximum images (3 per tab)
    if (tabs[tabIndex].images.length >= 3) {
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
          };
          
          const updatedTabs = [...tabs];
          updatedTabs[tabIndex].images.push(newImage);
          setTabs(updatedTabs);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleDeleteImage = (tabId: string, imageId: string) => {
    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    if (tabIndex === -1) return;
    
    const updatedTabs = [...tabs];
    updatedTabs[tabIndex].images = updatedTabs[tabIndex].images.filter(img => img.id !== imageId);
    setTabs(updatedTabs);
  };
  
  // Add new tab
  const addNewTab = () => {
    const newTab: GalleryTab = {
      id: `tab-${Date.now()}`,
      name: "",
      images: []
    };
    
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };
  
  // Delete tab
  const deleteTab = (tabId: string) => {
    // Don't delete if it's the only tab
    if (tabs.length <= 1) {
      alert("Cannot delete the last tab.");
      return;
    }
    
    const updatedTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(updatedTabs);
    
    // Set active tab to first tab if the deleted tab was active
    if (activeTab === tabId) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  // Start editing tab name
  const startEditingTabName = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      setTabNameInput(tab.name);
      setEditingTabName(tabId);
    }
  };

  // Save tab name
  const saveTabName = (tabId: string) => {
    const updatedTabs = tabs.map(tab => 
      tab.id === tabId ? {...tab, name: tabNameInput} : tab
    );
    setTabs(updatedTabs);
    setEditingTabName(null);
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

        <div className="mb-4 flex justify-between items-center">
          <Button 
            onClick={addNewTab}
            className="flex items-center gap-2 bg-hive-blue hover:bg-hive-lightblue text-white"
          >
            <PlusCircle className="h-4 w-4" />
            Add Event Tab
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center overflow-x-auto pb-2">
            <TabsList className="bg-transparent p-0 h-auto flex-wrap">
              {tabs.map((tab) => (
                <div key={tab.id} className="flex items-center bg-muted rounded-md mr-2 mb-2">
                  <TabsTrigger 
                    value={tab.id} 
                    className="data-[state=active]:bg-hive-amber data-[state=active]:text-white"
                    onClick={() => editingTabName !== tab.id && setActiveTab(tab.id)}
                  >
                    {editingTabName === tab.id ? (
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          saveTabName(tab.id);
                        }}
                        className="flex items-center"
                      >
                        <Input
                          value={tabNameInput}
                          onChange={(e) => setTabNameInput(e.target.value)}
                          placeholder="Enter event name"
                          className="h-7 w-24 mr-1"
                          autoFocus
                        />
                        <Button type="submit" size="sm" variant="ghost" className="h-7 p-0 px-2">
                          Save
                        </Button>
                      </form>
                    ) : (
                      <span onDoubleClick={() => startEditingTabName(tab.id)}>
                        {tab.name || "Unnamed Event"}
                      </span>
                    )}
                  </TabsTrigger>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-full px-2 text-gray-500 hover:text-red-500"
                    onClick={() => deleteTab(tab.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <div className="mb-4 flex justify-end">
                <div className="relative">
                  <input
                    type="file"
                    id={`upload-image-${tab.id}`}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, tab.id)}
                    disabled={tab.images.length >= 3}
                  />
                  <label
                    htmlFor={`upload-image-${tab.id}`}
                    className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md bg-hive-amber text-white hover:bg-hive-gold transition-colors ${
                      tab.images.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Image
                    {tab.images.length >= 3 && 
                      <span className="ml-1 text-xs">(Max reached)</span>
                    }
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.images.map((image) => (
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
                        onClick={() => handleDeleteImage(tab.id, image.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
                {tab.images.length === 0 && (
                  <div className="col-span-full py-12 text-center">
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
