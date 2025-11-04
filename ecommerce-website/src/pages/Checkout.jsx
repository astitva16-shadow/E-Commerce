import React from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderConfirmation from '../components/checkout/OrderConfirmation';

const Checkout = () => {
    const [orderConfirmed, setOrderConfirmed] = React.useState(false);

    const handleOrderConfirmation = () => {
        setOrderConfirmed(true);
    };

    return (
        <div className="container mx-auto p-4">
            {orderConfirmed ? (
                <OrderConfirmation />
            ) : (
                <CheckoutForm onConfirm={handleOrderConfirmation} />
            )}
        </div>
    );
};

export default Checkout;