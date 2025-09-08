import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';

function About() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9884480279';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleLocationClick = () => {
    const location = 'https://maps.app.goo.gl/MMfV55tiE56MVoKQA?g_st=aw';
    window.open(location, '_blank');
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Welcome to MAHALAKSHMI Plastic – Your trusted provider of quality plastic products.</p>
      </div>

      {/* About Info Card */}
      <div className="about-container">
        <div className="about-card">
          <h2>Business Details</h2>
          <p><strong>Business Name:</strong> MAHALAKSHMI Plastic</p>
          <p><strong>Owner:</strong> S. Malaram Solanki</p>
          <p><strong>Services:</strong> Tailoring Material, BOPP Covers, Carry Bags, and All Plastic Items</p>

          <div className="about-buttons">
            <button className="location-button" onClick={handleLocationClick}>
              View on Google Maps
            </button>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              Contact via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
