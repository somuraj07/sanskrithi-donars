
import { Phone, MapPin, Calendar } from 'lucide-react';


interface DonorCardProps {
  email :String ;
  rollNo: String ;
  bloodType: String;
  address: String;
  lastDonation :String;
  contact :String;
  image :String;
  available :Boolean;
  id:String;
}
 
export const Donarcard = ({ 
  id,
  email ,
  rollNo,
  bloodType,
  address,
  lastDonation ,
  contact ,
  image ,
  available
 }:DonorCardProps) => {
  return <Link to={`/donar/${id}`}></Link>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold">
          {bloodType}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Last Donation: {new Date(lastDonation).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{contact}</span>
          </div>
          <div className="flex items-center gap-2">
           {email}

          </div>
          <div className="flex items-center gap-2">
           {rollNo}
           
          </div>
          <div className="flex items-center gap-2">
           {available:Boolean}
           
          </div>
        </div>
      </div>
    </div>
  
}