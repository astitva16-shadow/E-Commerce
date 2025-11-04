import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const PromoBanner = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🎉 Winter Sale 2025
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Get Up To 25% Off
              <br />
              On All Items
            </h2>
            
            <p className="text-white/90 text-lg">
              Limited time offer on our entire collection. Don't miss out on these exclusive deals!
            </p>
            
            <div className="flex gap-4">
              <Link to="/shop">
                <Button variant="secondary">
                  Shop Sale
                </Button>
              </Link>
            </div>

            {/* Countdown Timer */}
            <div className="flex gap-4 pt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-white/80">Days</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm text-white/80">Hours</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">45</div>
                <div className="text-sm text-white/80">Minutes</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=600&h=600&fit=crop"
              alt="Sale Items"
              className="rounded-2xl shadow-2xl"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-accent">25%</div>
              <div className="text-sm font-medium">OFF</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
