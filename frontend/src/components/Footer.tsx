
import {  Facebook, Twitter, Instagram, Mail } from 'lucide-react';
export default function Footer() {
  return (
    <div>
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
  )
}
