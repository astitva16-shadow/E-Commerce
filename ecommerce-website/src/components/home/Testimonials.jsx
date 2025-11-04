import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        review: "Absolutely love the products! They are of high quality and the customer service is fantastic.",
        rating: 5
    },
    {
        id: 2,
        name: "John Smith",
        review: "Great experience shopping here. Fast shipping and the items were exactly as described.",
        rating: 4
    },
    {
        id: 3,
        name: "Emily Johnson",
        review: "I bought a few items for gifts and they were a hit! Will definitely shop again.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <div className="py-10 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 italic">"{testimonial.review}"</p>
                        <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
                        <div className="flex items-center mt-2">
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.121-6.536L0 6.545l6.545-.954L10 0l2.455 5.591L20 6.545l-5.243 4.005 1.121 6.536z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;