import { useState } from 'react';
import { Search, Droplets, Menu, X, Star,  Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { donors } from './data';
import { DonorCard } from './components/DonorCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredDonors = donors.filter(donor => 
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-red-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Droplets className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">SGI Blood Donors</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-red-200 transition-colors">Home</a>
              <a href="#" className="hover:text-red-200 transition-colors">Find Donors</a>
              <a href="#" className="hover:text-red-200 transition-colors">About Us</a>
              <a href="#" className="hover:text-red-200 transition-colors">Contact</a>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors">
                Become a Donor
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4">
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Home</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Find Donors</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">About Us</a>
              <a href="#" className="block py-2 hover:text-red-200 transition-colors">Contact</a>
              <button className="mt-2 w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors">
                Become a Donor
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Quote */}
      <section className="relative bg-red-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1600"
            alt="Blood Donation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Every Drop Counts: Connect with Blood Donors Today
            </h1>
            <p className="text-xl mb-8">
              "The gift of blood is the gift of life. Your single donation can save up to three lives."
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-100 transition-colors">
              Find Donors Now
            </button>
          </div>
        </div>
      </section>

      {/* Search and Donors Section */}
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
          {filteredDonors.map(donor => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Sarah Mitchell"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Sarah Mitchell</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"The blood donation process was smooth and comfortable. The staff was incredibly professional and caring. I'm proud to be a regular donor!"</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="David Cooper"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">David Cooper</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"As a recipient, I'm eternally grateful for blood donors. They literally saved my life during emergency surgery. Thank you to all donors!"</p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Emma Thompson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Emma Thompson</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"The Blood Donors Network made it easy to find donors quickly when my father needed blood. Forever thankful for this amazing service!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Blood Donors Network connects blood donors with those in need, making the process of finding and donating blood easier than ever.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Find Donors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Donor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blood Drive Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 9398671676</li>
                <li>Email: somasankar33@gmail.com</li>
                <li>Address: sanskrithi school of instuation </li>
                <li>beedupalli,puttaparthi</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and blood drive events.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 text-center md:text-right">
                © 2024 Blood Donors Network. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;