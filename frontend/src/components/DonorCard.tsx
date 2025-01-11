import React from 'react';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { Donor } from '../types';

interface DonorCardProps {
  donor: Donor;
}

export const DonorCard: React.FC<DonorCardProps> = ({ donor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img 
          src={donor.image} 
          alt={donor.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold">
          {donor.bloodType}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{donor.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Last Donation: {new Date(donor.lastDonation).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{donor.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};