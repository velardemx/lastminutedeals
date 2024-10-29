import React from 'react';
import TourCard from './TourCard';

export default function FeaturedDeals() {
  const tours = [
    {
      title: "Tulum Ruins & Cenotes Adventure",
      location: "Tulum",
      duration: "6 hours",
      groupSize: "Max 12",
      rating: 4.8,
      originalPrice: 129,
      discountedPrice: 79,
      imageUrl: "https://images.unsplash.com/photo-1682687982501-1e58ab814714"
    },
    {
      title: "Cozumel Snorkeling Paradise",
      location: "Cozumel",
      duration: "4 hours",
      groupSize: "Max 8",
      rating: 4.9,
      originalPrice: 89,
      discountedPrice: 49,
      imageUrl: "https://images.unsplash.com/photo-1682687982468-f3d6084fb019"
    },
    {
      title: "Playa del Carmen Food Tour",
      location: "Playa del Carmen",
      duration: "3 hours",
      groupSize: "Max 10",
      rating: 4.7,
      originalPrice: 79,
      discountedPrice: 39,
      imageUrl: "https://images.unsplash.com/photo-1682687982185-531c9738acc9"
    },
    {
      title: "Cancun Sailing & Sunset",
      location: "Cancun",
      duration: "5 hours",
      groupSize: "Max 15",
      rating: 4.9,
      originalPrice: 149,
      discountedPrice: 89,
      imageUrl: "https://images.unsplash.com/photo-1682687982502-1e58ab814714"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Today's Hot Deals</h2>
          <button className="text-teal-600 hover:text-teal-700 font-semibold">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}