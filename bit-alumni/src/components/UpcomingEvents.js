import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingEvents.css"; // Ensure styles are applied

const UpcomingEvents = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Upcoming Events - BIT Mesra Alumni Interaction</h1>
        </div>
        {/* <button className="auth-button" onClick={() => (window.location.href = "/signup-login")}>
          Sign Up/Login
        </button> */}
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/events">Back to Events</Link>
          </li>
        </ul>
      </nav>

      {/* Upcoming Events Section */}
      <div className="events-container">
        <div className="event-list">
          <h2>Upcoming Events</h2>
          <p style={{ textAlign: "center", fontSize: "20px", color: "red", fontWeight: "bold" }}>
            No Upcoming Events!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
