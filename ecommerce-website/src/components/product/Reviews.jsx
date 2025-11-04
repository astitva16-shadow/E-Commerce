import React from 'react';

const Reviews = ({ reviews }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to review this product!</p>
            ) : (
                <ul className="space-y-4">
                    {reviews.map((review, index) => (
                        <li key={index} className="border p-4 rounded shadow">
                            <div className="flex items-center mb-2">
                                <span className="font-bold">{review.author}</span>
                                <span className="ml-2 text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                </span>
                            </div>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Reviews;