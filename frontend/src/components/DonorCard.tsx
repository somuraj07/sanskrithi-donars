
import { Phone, MapPin, Calendar, Link, X, Check, IdCard, Mail, User } from 'lucide-react';


export interface DonorCardProps {
  name: any;
  email :string;
  rollNo: string;
  bloodType: string;
  address: string;
  lastDonation :string;
  contact :string;
  image :string;
  available :boolean;
  id:string;
  donar:any;
}
 
export const Donarcard = ({ 
  name,
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
  return <Link 
  to={`/donar/${id}`}
  className="block no-underline text-inherit"
>
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
    <div className="relative">
      <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-600" />
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
        <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-100">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
          <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${available ? 'bg-green-500' : 'bg-gray-400'}`} />
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold">
        {bloodType}
      </div>
    </div>
    <div className="pt-16 p-6">
      <h3 className="text-xl font-semibold text-center mb-4">{name}</h3>
      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="text-sm">{address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-red-500" />
          <span className="text-sm">Last Donation: {new Date(lastDonation).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-red-500" />
          <span className="text-sm">{contact}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-red-500" />
          <span className="text-sm">{email}</span>
        </div>
        <div className="flex items-center gap-3">
          <IdCard className="w-5 h-5 text-red-500" />
          <span className="text-sm">Roll No: {rollNo}</span>
        </div>
        <div className="flex items-center gap-2 justify-center mt-4">
          <span className="text-sm font-medium">
            {available ? (
              <div className="flex items-center gap-1 text-green-600">
                <Check className="w-4 h-4" />
                Available for donation
              </div>
            ) : (
              <div className="flex items-center gap-1 text-gray-500">
                <X className="w-4 h-4" />
                Not available
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  </div>
</Link>
  
}