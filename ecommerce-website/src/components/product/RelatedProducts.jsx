import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../shop/ProductCard';

const RelatedProducts = ({ currentProductId }) => {
    const { products } = useContext(CartContext);
    
    // Filter related products based on some criteria (e.g., category)
    const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 4);

    return (
        <div className="related-products mt-8">
            <h2 className="text-xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;