import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoundationDay.css"; // Ensure this file exists for styles

const FoundationDay2024 = () => {
  const navigate = useNavigate();
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Function to open fullscreen mode
  const openFullScreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
    document.body.style.overflow = "hidden"; // Prevent scrolling when fullscreen is open
  };

  // Function to close fullscreen mode
  const closeFullScreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling when fullscreen is closed
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Birla Institute of Technology Mesra Alumni Interaction</h1>
        </div>
        {/* <button className="auth-button" onClick={() => navigate("/signup-login")}>
          Sign Up/Login
        </button> */}
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Events</a>
            <ul className="dropdown-content">
              <li><a href="/events">Events</a></li>
              <li><a href="/galleries">Galleries</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Back Button */}
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592; Back
      </div>

      {/* Page Title */}
      <div className="foundation-day-container">
        <h1>Foundation Day 2024</h1>
      </div>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        <h2>Event Highlights</h2>
        <div className="foundation-gallery">
          {[
            "t1721116796_JrmAWa5iKM",
            "t1721116794_vf8fjez9VZ",
            "t1721116793_rBaKGWUKPH",
            "t1721116792_xK3QMz4SUW",
            "t1721116791_hBoUypo11P",
            "t1721116789_GKn4w8pYmU",
            "t1721116788_8qiOzaqbD6",
            "t1721116787_tzC3FXHhA7",
            "t1721116786_V6KZDxtROC",
            "t1721116784_cuVVEueybA",
            "t1721116666_DSf9PGbEJB",
            "t1721116666_7c9M1uCsAh",
          ].map((image) => (
            <img
              key={image}
              src={`https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/${image}.jpg`}
              alt="Foundation Day 2024"
              className="gallery-image"
              onClick={() => openFullScreen(`https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/${image}.jpg`)}
            />
          ))}
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <div className="fullscreen-container" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeFullScreen}>&times;</span>
            <img className="fullscreen-image" src={fullscreenImage} alt="Fullscreen View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FoundationDay2024;
