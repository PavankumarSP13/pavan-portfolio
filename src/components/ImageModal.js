// src/components/ImageModal.js

// import React from 'react';
// import '../styles/ImageModal.css';

// const ImageModal = ({ isOpen, imageSrc, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <span className="modal-close" onClick={onClose}>&times;</span>
//         <img src={imageSrc} alt="Enlarged view" className="modal-image" />
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

// src/components/ImageModal.js

import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ isOpen, imageSrc, onClose, onNext, onPrev }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <button className="modal-nav-button left" onClick={onPrev}>
          &#9664;
        </button>
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
        <button className="modal-nav-button right" onClick={onNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;

