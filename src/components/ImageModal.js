// src/components/ImageModal.js

import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
