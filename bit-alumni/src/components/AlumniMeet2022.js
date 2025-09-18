import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoundationDay.css"; // Ensure this file exists for styles

const AlumniMeet2022 = () => {
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
        <h1>Alumni Meet 2022</h1>
      </div>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        <h2>Event Highlights</h2>
        <div className="foundation-gallery">
          {[
            "t1648983462_vOjGXJJPJB",
            "t1648983461_nrqHwwaHR8",
            "t1648983460_Zzg59XmiN6",
          ].map((image) => (
            <img
              key={image}
              src={`https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/${image}.jpg`}
              alt="Alumni Meet 2022"
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

export default AlumniMeet2022;
