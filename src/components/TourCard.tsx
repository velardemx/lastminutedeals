import React from 'react';
import { Clock, Users, Star, DollarSign, MapPin } from 'lucide-react';

interface TourCardProps {
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

export default function TourCard({
  title,
  location,
  duration,
  groupSize,
  rating,
  originalPrice,
  discountedPrice,
  imageUrl,
}: TourCardProps) {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg font-semibold">
          {discount}% OFF
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {groupSize}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            {rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
            <span className="ml-2 text-xl font-bold text-teal-600">${discountedPrice}</span>
          </div>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}