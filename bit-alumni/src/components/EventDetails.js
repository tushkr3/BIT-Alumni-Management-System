import React from "react";
import "./EventDetails.css"; // Ensure styles are properly applied
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Event Details</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/events">Back to Events</Link>
          </li>
        </ul>
      </nav>

      {/* Event Details Section */}
      <div className="event-details-container">
        <div className="no-padding--as-header-themed mdl-color--primary-dark mdl-color--primary-dark-themed">
          <div className="mdl-grid center-wrap adjust-event-name">
            <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--6-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div style={{ paddingLeft: "8px" }}>
                <div className="margin-bottom-8"></div>
                <div
                  className="inline-block mdl-color-text--white font-24 font-xs-16 font-md-18"
                  style={{ lineHeight: "initial" }}
                >
                  Faculty Webinar Series by BITMAA-NA, 22 February 2025, 8:00 PM IST
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color-text--white font-16">
              <div style={{ paddingLeft: "8px" }}>
                <span className="new-icon" title="Event Date">
                  <i className="icon-event_available font-18 upper-icons"></i>
                  Saturday, Feb 22, 2025
                </span>
                <span className="creator-adjust-phone">
                  <span title="View Count" className="icon-remove_red_eye"></span>
                  <span title="View Count"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Layout */}
        <div className="event-details-layout">
          {/* Left Side - Event Info */}
          <div className="event-details-left">
            <h2>Special Guest Webinar</h2>
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671739199868.jpg"
              alt="Event"
            />
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
            <p>
              <strong>Event Type:</strong> Online
            </p>
            <span className="past-event-badge">Past Event</span>
          </div>

          {/* Right Side - Event Description */}
          <div className="event-details-right">
            <div className="event-description">
              <h3>
                <i className="icon-description mdl-color-text--primary"></i> DESCRIPTION
              </h3>
              <p>
                "Innovation is seeing what everybody has seen and thinking what nobody has thought." –{" "}
                <strong>Albert Szent-Györgyi</strong>.
              </p>
              <p>
                At the Students' Alumni Cell, we constantly work to strengthen the bond between BIT Mesra and its alumni. Every
                event and interaction takes us one step closer to this vision. Our alumni are not just former students—they are
                mentors, industry leaders, and sources of inspiration. BITMAA-NA is crucial in making these connections
                possible, bringing back some of the best minds to our community.
              </p>

              <p>
                This time, we are excited to welcome <strong>Mr. Raweesh Chaudhary</strong>, a proud BIT Mesra alumnus and a
                leader in the pharmaceutical industry. He has held senior roles at BTG Pharmaceuticals and Biogen, shaping
                medical strategy and driving innovation. He is also an adjunct faculty member at BIT Mesra, sharing his
                expertise with future professionals.
              </p>

              <h4>What’s the Webinar About?</h4>
              <ul>
                <li>How data analytics is driving real value in the pharma industry</li>
                <li>The digital future of pharma technical development</li>
                <li>Who is leading the way in educating professionals about digital health products?</li>
              </ul>

              <h4>Event Details:</h4>
              <ul>
                <li>✔ Date: 22nd February 2025, Saturday</li>
                <li>✔ Time: 8:00 PM - 9:30 PM IST</li>
                <li>✔ Where: Microsoft Teams (Link to be shared on registration)</li>
              </ul>

              <p>
                <strong>Want to be a part of this insightful discussion?</strong> Register now:{" "}
                <a href="https://forms.gle/LLhmeYTMpwsvybFX7" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </p>

              <p>We look forward to your participation!</p>

              <p>
                <strong>Best Regards,</strong>
              </p>
              <p>Vishal H Shah</p>
              <p>ADAIR, BIT Mesra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
