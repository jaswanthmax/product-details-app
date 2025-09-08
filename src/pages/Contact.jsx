import React from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';

function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9884480279';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleLocationClick = () => {
    const location = 'https://maps.app.goo.gl/MMfV55tiE56MVoKQA?g_st=aw';
    window.open(location, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out for any queries or orders.</p>
      </div>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> 9884480279</p>
          <p><strong>Email:</strong> info@mahalakshmi.com</p>
          <p>
            <strong>Location:</strong> 
            <button className="location-button" onClick={handleLocationClick}>
              View on Google Maps
            </button>
          </p>
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            Contact via WhatsApp
          </button>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=mahalakshmi%20plastic&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          title="location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
