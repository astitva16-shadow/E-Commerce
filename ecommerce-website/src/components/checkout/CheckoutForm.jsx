import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="zip">ZIP Code</label>
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="expiryDate">Expiry Date</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Complete Purchase</button>
        </form>
    );
};

export default CheckoutForm;