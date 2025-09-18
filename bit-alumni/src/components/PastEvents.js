import React from "react";
import { Link } from "react-router-dom";
import "./PastEvents.css"; // Ensure styles are properly applied

const PastEvents = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Past Events - BIT Mesra Alumni Interaction</h1>
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

      {/* Events Container */}
      <div className="events-container">
        <div className="event-list">
          <h2>Past Events</h2>

          {/* Event 1 */}
          <div className="event-card">
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671739199868.jpg"
              alt="BIT Mesra Event"
            />
            <div className="event-info">
              <h3>Faculty Webinar Series by BITMAA-NA</h3>
              <p>
                <strong>Date:</strong> February 22, 2025
              </p>
              <p>
                <strong>Time:</strong> 8:00 PM - 9:30 PM
              </p>
              <p>
                <strong>Location:</strong>{" "}
                <a href="https://forms.gle/LLhmeYTMpwsvybFX7" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => (window.location.href = "/event-details")}>
                View
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="event-card">
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671694838587.jpg"
              alt="BIT Mesra Event"
            />
            <div className="event-info">
              <h3>Faculty Webinar Series by Prof. Aatmesh Shrivastava</h3>
              <p>
                <strong>Date:</strong> September 16, 2023
              </p>
              <p>
                <strong>Time:</strong> 8:00 PM - 9:30 PM
              </p>
              <p>
                <strong>Location:</strong>{" "}
                <a href="https://forms.gle/GFTDYE4DZaRD4U1D7" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => (window.location.href = "/events1")}>
                View
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="event-card">
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671678460807.jpg"
              alt="BIT Mesra Event"
            />
            <div className="event-info">
              <h3>BITMAA-NA Webinar Series by Mr. Rajesh Sharma</h3>
              <p>
                <strong>Date:</strong> March 18, 2023
              </p>
              <p>
                <strong>Time:</strong> 8:00 PM - 9:30 PM
              </p>
              <p>
                <strong>Location:</strong>{" "}
                <a href="https://forms.gle/D32f8vuM8NXMRAip9" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => (window.location.href = "/events2")}>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
