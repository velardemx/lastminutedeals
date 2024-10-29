import React from 'react';
import { Compass, Palmtree, DollarSign, Calendar, Users, MapPin } from 'lucide-react';
import TourCard from './components/TourCard';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDeals from './components/FeaturedDeals';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <FeaturedDeals />
      
      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Book With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <DollarSign className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
            <p className="text-gray-600">Access last-minute discounts up to 70% off regular prices</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Calendar className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Updates</h3>
            <p className="text-gray-600">New deals every day from verified tour operators</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
            <p className="text-gray-600">Secure your spot instantly with just $1 deposit</p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Cancun', 'Tulum', 'Playa del Carmen', 'Cozumel'].map((destination) => (
              <div key={destination} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={`https://source.unsplash.com/800x600/?${destination.toLowerCase()},beach`}
                  alt={destination}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{destination}</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">View Deals</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;