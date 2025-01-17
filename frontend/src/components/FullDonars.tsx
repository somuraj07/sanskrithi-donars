import { Search } from "lucide-react";
import Appbar from "./Appbar"
import Footer from "./Footer"
import Review from "./Review"
import { useState } from 'react';
import { Donarcard } from './DonorCard';
import { Donar } from "../hooks";

export const fullDonar = ({}:{donar:Donar}) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const donors: any[] = []; // Define the donors array
    const filteredDonors = donors.filter((donor: { name: string; bloodType: string; location: string; }) => 
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
return <div>
    <Appbar />
    <div className="container mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, blood type, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDonors.map((donor: { id: any; }) => (
            <Donarcard key={donor.id} donar={donor} name={undefined} email={""} rollNo={""} bloodType={""} address={""} lastDonation={""} contact={""} image={""} available={false} id={""} />
            ))}
        </div>
      </div>
    <Review />
    <Footer />
</div>
}
export default fullDonar;