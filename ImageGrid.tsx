import React from 'react';
import { Image } from '../types/imageTypes';

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 w-full">
      {images.map((image) => (
        <div key={image.id} className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <a href={image.urls.full} target="_blank" rel="noopener noreferrer">
            <img
              src={image.urls.small}
              loading="lazy"
              alt={image.alt_description}
              className="w-full h-48 object-cover transition duration-300 ease-in-out hover:opacity-80"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;