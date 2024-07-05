// src/components/ImageCarousel.js

/*import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        &#9664;
      </button>
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt="profile"
          className="carousel-image"
          onClick={() => openModal(currentIndex)}
        />
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &#9654;
      </button>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={images[currentIndex]}
        onClose={closeModal}
      />
    </div>
  );
};

export default ImageCarousel; */

// src/components/ImageCarousel.js

import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        &#9664;
      </button>
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt="profile"
          className="carousel-image"
          onClick={() => openModal(currentIndex)}
        />
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &#9654;
      </button>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={images[currentIndex]}
        onClose={closeModal}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
};

export default ImageCarousel;

