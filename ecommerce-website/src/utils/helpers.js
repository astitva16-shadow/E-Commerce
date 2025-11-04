// This file contains helper functions used throughout the application.

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const truncateText = (text, length) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

export const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
};

export const isInCart = (cartItems, productId) => {
    return cartItems.some(item => item.id === productId);
};