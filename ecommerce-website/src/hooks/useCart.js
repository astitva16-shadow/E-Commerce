import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        calculateTotal();
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
        calculateTotal();
    };

    const calculateTotal = () => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    };

    return {
        cartItems,
        total,
        addToCart,
        removeFromCart,
    };
};

export default useCart;