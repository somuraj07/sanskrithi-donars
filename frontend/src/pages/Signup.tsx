import React, { useState, ChangeEvent } from 'react';
import { Camera, Calendar, MapPin, Phone, Mail, Key, User, Droplet, Clock, Check } from 'lucide-react';

type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    rollNo: '',
    bloodType: '' as BloodType,
    address: '',
    age: '',
    lastDonation: '',
    contact: '',
    available: false
  });

  const [image, setImage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, image });
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Blood Donor Registration</h2>
          <p className="mt-2 text-gray-600">Join our life-saving community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-red-500">
                {image ? (
                  <img src={image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
              <label htmlFor="image" className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors">
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4 mr-1" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Key className="w-4 h-4 mr-1" /> Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 mr-1" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 mr-1" /> Roll Number
              </label>
              <input
                type="text"
                name="rollNo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.rollNo}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Droplet className="w-4 h-4 mr-1" /> Blood Type
              </label>
              <select
                name="bloodType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.bloodType}
                onChange={handleInputChange}
              >
                <option value="">Select Blood Type</option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-4 h-4 mr-1" /> Age
              </label>
              <input
                type="number"
                name="age"
                required
                min="18"
                max="65"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 mr-1" /> Last Donation Date
              </label>
              <input
                type="date"
                name="lastDonation"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.lastDonation}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Phone className="w-4 h-4 mr-1" /> Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 mr-1" /> Address
            </label>
            <textarea
              name="address"
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={formData.available}
              onChange={handleInputChange}
              className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="available" className="ml-2 block text-sm text-gray-700 flex items-center">
              <Check className="w-4 h-4 mr-1" /> Available for donation
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              Register as Donor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;