import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Button from '../common/Button'

const CartSummary = () => {
  const { getCartTotal, cart } = useContext(CartContext)
  
  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-heading font-bold">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({cart.length} items)</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {subtotal < 100 && (
        <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm">
          Add ${(100 - subtotal).toFixed(2)} more to get FREE shipping!
        </div>
      )}

      <Link to="/checkout" className="block">
        <Button variant="primary" className="w-full">
          Proceed to Checkout
        </Button>
      </Link>

      <Link to="/shop">
        <Button variant="secondary" className="w-full">
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}

export default CartSummary
