import React from "react";
import { Link } from "react-router-dom";
import "./Events2.css"; // Ensure styles are applied

const Events2 = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
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
                  BITMAA-NA webinar series by Mr. Rajesh Sharma, 18th March 2023, 8:00 PM IST
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color-text--white font-16">
              <div style={{ paddingLeft: "8px" }}>
                <span className="new-icon" title="Event Date">
                  <i className="icon-event_available font-18 upper-icons"></i>
                  Saturday, March 18, 2023
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
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671678460807.jpg"
              alt="Event Image"
            />
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
                <strong style={{ color: "red" }}>"Demystifying AI"</strong>
              </p>
              <p>
                BITMAA-NA is back with another valuable webinar by <strong>Mr. Rajesh Sharma</strong> as part of
                its faculty webinar program. The <strong>Student Alumni Relations Cell</strong> is delighted to
                welcome Mr. Sharma, a luminous alumnus from the <strong>1985-1989 batch</strong> in Computer
                Science and an <strong>Academy Award Winner</strong>. He is currently a PhD student at{" "}
                <strong>ETH Zurich</strong>, where he conducts research at the intersection of rendering and
                machine learning at <strong>Disney Research</strong>.
              </p>

              <p>
                Rajesh spent <strong>23 years</strong> at Walt Disney Animation Studios in various management and
                individual contributor roles. He played a key role in developing tools like <strong>XGen</strong>,
                <strong> Paint3D</strong>, and <strong>hair/cloth simulation</strong>. His work contributed to
                major animated films, including the Academy Award-winning{" "}
                <strong>Big Hero 6, Frozen, Zootopia, and Encanto</strong>. Later, he became the{" "}
                <strong>VP of Engineering at Spire Animation Studios</strong>.
              </p>

              <p>
                He strongly believes in giving back to the community and volunteers at the{" "}
                <strong>SIGGRAPH conference</strong> every year. He has also taught online courses on{" "}
                <strong>Ray Tracing</strong> and <strong>Machine Learning</strong> with over{" "}
                <strong>15 hours of video instruction</strong>.
              </p>

              <h4>Webinar Topic:</h4>
              <p>
                <strong style={{ color: "red" }}>‘Demystifying Artificial Intelligence’</strong>
              </p>
              <p>🗓️ <strong>Date:</strong> 18th March 2023, 8:00 PM IST</p>

              <h4>Register for the Webinar:</h4>
              <p>
                <a
                  href="https://forms.gle/D32f8vuM8NXMRAip9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  Click Here to Register
                </a>
              </p>

              <p>
                <strong>Thanks and Regards,</strong>
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

export default Events2;
