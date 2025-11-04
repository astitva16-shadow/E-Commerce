import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <img
                    src={currentImage}
                    alt="Product"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;