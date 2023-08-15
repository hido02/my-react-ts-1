import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="gallery-container">
        {Array.from(Array(3).keys()).map(index => (
          <img
            key={index}
            src={`images/${index + 1}.jpg`}
            alt={`Photo ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(`images/${index + 1}.jpg`)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="image-modal">
          <img src={selectedImage} alt="Selected" />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
