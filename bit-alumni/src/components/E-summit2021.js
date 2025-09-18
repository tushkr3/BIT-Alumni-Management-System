import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoundationDay.css"; // Ensure this file exists for styles

const ESummit2021 = () => {
  const navigate = useNavigate();
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Open Fullscreen Mode
  const openFullScreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  // Close Fullscreen Mode
  const closeFullScreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto"; // Enable scrolling
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
        <h1>E-Summit 2021</h1>
      </div>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        <h2>Event Highlights</h2>
        <div className="foundation-gallery">
          {[
            "t1615779060_QLLUBNIcLn",
            "t1615779059_USTEh4UVOm",
            "t1615779058_YJTl4UwNPa",
            "t1615779057_yWuPyIptIC",
            "t1615779056_gPK4hpeVcy",
          ].map((image) => (
            <img
              key={image}
              src={`https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/${image}.jpg`}
              alt="E-Summit 2021"
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

export default ESummit2021;
