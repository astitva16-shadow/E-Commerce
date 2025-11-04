import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        setTotalAmount((prevAmount) => prevAmount + product.price);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
        const productToRemove = cartItems.find(item => item.id === productId);
        if (productToRemove) {
            setTotalAmount((prevAmount) => prevAmount - productToRemove.price);
        }
    };

    const clearCart = () => {
        setCartItems([]);
        setTotalAmount(0);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};