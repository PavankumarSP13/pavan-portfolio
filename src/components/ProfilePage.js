// src/components/ProfilePage.js

import React from 'react';
import AboutMe from './AboutMe';
import FamilyDetails from './FamilyDetails';
import ContactDetails from './ContactDetails';
import ImageCarousel from './ImageCarousel';
import '../styles/ProfilePage.css';

const images = [
  require('../assets/images/image1.jpg'),
  require('../assets/images/image2.jpg'),
  require('../assets/images/image3.jpg'),
  // Add more images as needed
];

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>Profile </h1>
      <ImageCarousel images={images} />
      <AboutMe />
      <FamilyDetails />
      <ContactDetails />
    </div>
  );
}

export default ProfilePage;
