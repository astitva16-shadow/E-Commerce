import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              ✨ New Collection 2025
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight"
            >
              Timeless Elegance,
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}Handcrafted Perfection
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              Discover our exquisite collection of handcrafted jewelry. Each piece tells a story of artistry, passion, and timeless beauty.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop">
                <Button variant="primary">
                  Shop Now
                </Button>
              </Link>
              <Button variant="secondary">
                View Collections
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"
                alt="Featured Jewelry"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20"
            >
              <div className="text-sm font-medium text-gray-900">Free Shipping</div>
              <div className="text-xs text-gray-600">On orders over $100</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-xl shadow-lg z-20"
            >
              <div className="text-sm font-medium">25% OFF</div>
              <div className="text-xs">Limited Time</div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
