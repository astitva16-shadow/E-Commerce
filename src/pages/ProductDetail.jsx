import { useParams } from 'react-router-dom'
import { products } from '../data/placeholderData'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container-custom section-padding text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm p-8">
          <div>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="text-4xl font-bold text-gray-900 mb-6">
              ${product.price}
            </div>
            <button className="btn-primary w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
