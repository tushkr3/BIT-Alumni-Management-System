import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoundationDay2022.css"; // Make sure this CSS file exists

const FoundationDay2022 = () => {
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
        <h1>Foundation Day 2022</h1>
      </div>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        <h2>Event Highlights</h2>
        <div className="foundation-gallery">
          {[
            "t1659606353_kjumRJWGlW",
            "t1659606364_ttC0uGgp6Z",
            "t1659606360_b4egEabc8w",
            "t1659606358_iIYUj66Cnp",
            "t1659606356_hzj5Jvo728",
            "t1659606355_oW83haAd6h",
            "t1659606350_jocCNx4oiW",
            "t1659606354_IWLKzrNeji",
            "t1659606352_dxPAk9C192",
            "t1659606349_vyxsjBm3vN",
          ].map((image) => (
            <img
              key={image}
              src={`https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/${image}.jpg`}
              alt="Foundation Day 2022"
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

export default FoundationDay2022;
