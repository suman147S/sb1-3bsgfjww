import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const Gallery = () => {
  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/257037/pexels-photo-257037.jpeg",
      title: "Sunday Worship Service",
      category: "worship"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1309902/pexels-photo-1309902.jpeg",
      title: "Youth Group Meeting",
      category: "youth"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1206788/pexels-photo-1206788.jpeg",
      title: "Christmas Celebration",
      category: "events"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
      title: "Community Outreach",
      category: "outreach"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
      title: "Baptism Service",
      category: "worship"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg",
      title: "Women's Fellowship",
      category: "fellowship"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
      title: "Worship Team Practice",
      category: "worship"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      title: "Easter Sunrise Service",
      category: "events"
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/8519484/pexels-photo-8519484.jpeg",
      title: "Children's Church",
      category: "children"
    },
    {
      id: 10,
      url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      title: "Choir Performance",
      category: "worship"
    },
    {
      id: 11,
      url: "https://images.pexels.com/photos/8271416/pexels-photo-8271416.jpeg",
      title: "Men's Prayer Breakfast",
      category: "fellowship"
    },
    {
      id: 12,
      url: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
      title: "Church Picnic",
      category: "events"
    },
    {
      id: 13,
      url: "https://images.pexels.com/photos/7235381/pexels-photo-7235381.jpeg",
      title: "Bible Study Group",
      category: "fellowship"
    },
    {
      id: 14,
      url: "https://images.pexels.com/photos/8108551/pexels-photo-8108551.jpeg",
      title: "Thanksgiving Service",
      category: "worship"
    },
    {
      id: 15,
      url: "https://images.pexels.com/photos/5853053/pexels-photo-5853053.jpeg",
      title: "Youth Camp",
      category: "youth"
    }
  ];

  // State for filtering and modal
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'worship', name: 'Worship' },
    { id: 'events', name: 'Events' },
    { id: 'outreach', name: 'Outreach' },
    { id: 'fellowship', name: 'Fellowship' },
    { id: 'youth', name: 'Youth' },
    { id: 'children', name: 'Children' }
  ];

  // Filtered images
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  // Open modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero 
        title="Our Gallery"
        subtitle="A visual journey through the life of our church"
        backgroundImage="https://images.pexels.com/photos/7235679/pexels-photo-7235679.jpeg"
        height="medium"
        overlay="medium"
      />

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Church Life in Pictures"
            subtitle="Browse through memories of our worship services, events, and community activities"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category.id
                    ? 'bg-primary-800 text-white'
                    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeModal}>
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/70 p-4">
              <h3 className="text-white text-xl">{selectedImage.title}</h3>
            </div>
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Request Photos Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-4">Share Your Photos</h2>
          <p className="text-lg mb-8">
            Do you have photos from church events you'd like to share? We'd love to add them to our gallery!
            Please email your high-quality images to photos@tlrchurch.org with a description of the event.
          </p>
          <a href="mailto:photos@tlrchurch.org" className="btn btn-primary">
            Email Photos
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Come Experience It Yourself</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Pictures tell a story, but experiencing our church family in person is even better. 
            Join us this Sunday for worship and fellowship.
          </p>
          <a href="/contact" className="btn bg-white text-primary-800 hover:bg-neutral-100">
            Plan Your Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;