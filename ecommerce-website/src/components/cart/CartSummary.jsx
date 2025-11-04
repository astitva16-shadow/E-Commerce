import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartSummary = () => {
    const { cartItems, totalAmount } = useContext(CartContext);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.name}</span>
                                <span>${item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartSummary;