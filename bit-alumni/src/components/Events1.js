import React from "react";
import { Link } from "react-router-dom";
import "./Events1.css"; // Ensure styles are properly applied

const Events1 = () => {
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
                  Faculty Webinar Series by Prof. Aatmesh Shrivastava
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color-text--white font-16">
              <div style={{ paddingLeft: "8px" }}>
                <span className="new-icon" title="Event Date">
                  <i className="icon-event_available font-18 upper-icons"></i>
                  Saturday, Sep 16, 2023
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
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671694838587.jpg"
              alt="Event Image"
            />
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
                <strong>"Unveiling the Blueprint: Engineering the Future with Hardware Design for Machine
                Learning Systems"</strong>
              </p>

              <p>
                We are thrilled to announce a captivating webinar series on{" "}
                <strong>"Hardware Design for Machine Learning Systems,"</strong> featuring the distinguished
                Associate Professor Aatmesh from Northeastern University.
              </p>

              <p>
                Aatmesh Shrivastava specializes in ultra-low power, mixed-signal circuits, power management, and
                clock sources. He was awarded a patent for a <strong>"Low Power Clock Source"</strong> and works
                extensively in these areas. To date, he has <strong>20 US patents</strong> to his name.
              </p>

              <p>
                This exceptional 4-part webinar series is an integral part of our esteemed faculty webinar lineup
                brought to us by <strong>BITMAA-NA</strong>, aiming to provide a comprehensive understanding of
                the intricate relationship between hardware design and machine learning.
              </p>

              <h4>Webinar Schedule:</h4>
              <ul>
                <li>🗓️ <strong>Date:</strong> 2nd September 2023</li>
                <li>🗓️ <strong>Date:</strong> 16th September 2023</li>
                <li>🗓️ <strong>Date:</strong> 30th September 2023</li>
                <li>🗓️ <strong>Date:</strong> 14th October 2023</li>
                <li>⏰ <strong>Time:</strong> 8:00 PM IST</li>
              </ul>

              <h4>Register for the 2nd Session:</h4>
              <p>
                <a
                  href="https://forms.gle/GFTDYE4DZaRD4U1D7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  Click Here to Register
                </a>
              </p>

              <p>We look forward to your participation!</p>

              <p>
                <strong>Best Regards,</strong>
              </p>
              <p>
                <strong>Vishal H Shah</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events1;
