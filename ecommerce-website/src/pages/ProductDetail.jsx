import React from 'react';
import ImageGallery from '../components/product/ImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import Reviews from '../components/product/Reviews';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductDetail = () => {
    // Placeholder data for product details
    const product = {
        id: 1,
        title: 'Sample Product',
        price: 29.99,
        shortDescription: 'This is a short description of the sample product.',
        longDescription: 'This is a longer description that provides more details about the sample product, including its features and benefits.',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        reviews: [
            { id: 1, rating: 5, comment: 'Amazing product!' },
            { id: 2, rating: 4, comment: 'Very good quality.' },
        ],
    };

    return (
        <div className="container mx-auto p-4">
            <ImageGallery images={product.images} />
            <ProductInfo product={product} />
            <Reviews reviews={product.reviews} />
            <RelatedProducts productId={product.id} />
        </div>
    );
};

export default ProductDetail;