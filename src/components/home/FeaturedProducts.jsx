import { motion } from 'framer-motion'
import { products } from '../../data/placeholderData'
import ProductCard from '../shop/ProductCard'

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces that showcase our finest craftsmanship and design excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
