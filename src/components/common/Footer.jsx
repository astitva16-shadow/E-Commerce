import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Astitva
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting timeless jewelry pieces with passion and precision since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>123 Jewelry Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="flex-shrink-0" />
                <span>hello@astitva.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-2">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Get updates on new arrivals and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Astitva. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
