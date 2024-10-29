import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
          alt="Mexican Caribbean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Last-Minute Adventures in Paradise
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Discover exclusive deals on unforgettable tours in the Mexican Caribbean
        </p>

        <div className="bg-white p-4 rounded-lg shadow-xl max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                <option value="">Select Destination</option>
                <option value="cancun">Cancun</option>
                <option value="tulum">Tulum</option>
                <option value="playa">Playa del Carmen</option>
                <option value="cozumel">Cozumel</option>
              </select>
            </div>
            <button className="bg-teal-600 text-white px-8 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Find Deals
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="font-semibold">50+ Tours</span> Available Today
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="font-semibold">Up to 70%</span> Discount
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="font-semibold">Instant</span> Confirmation
          </div>
        </div>
      </div>
    </div>
  );
}