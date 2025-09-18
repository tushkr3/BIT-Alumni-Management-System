import React from "react";
import "./Events.css"; // Ensure styles are correctly applied
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

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
              <li><a href="/gallery">Galleries</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Find Alumni</a>
            <ul className="dropdown-content">
              <li><a href="/AlumniDirectory">Alumni Directory</a></li>
              <li><a href="/InviteBatchmates">Invite Batchmates</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">News & Stories</a>
            <ul className="dropdown-content">
              <li><a href="/NewsStories">All News & Stories</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Careers</a>
            <ul className="dropdown-content">
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/internships">Internships</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Events Page Layout */}
      <div className="events-container">
        {/* Left Sidebar - Event Categories */}
        <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone category-adjust">
          <div className="search-bar">
            <input className="search-input-box" type="text" placeholder="Search by title..." />
            <span className="search-icon">
              <i className="icon-search"></i>
            </span>
          </div>

          <div className="sub-title1">EVENT CATEGORIES</div>
          <ul className="event-category-list">
            <li className="category-list active-category" onClick={() => navigate("/events")}>
              <span className="category-text">All Events</span>
              <span className="category-count">(3)</span>
            </li>
            <li className="category-list" onClick={() => navigate("/past-events")}>
              <span className="category-text">Past Events</span>
              <span className="category-count">(3)</span>
            </li>
            <li className="category-list" onClick={() => navigate("/upcoming-events")}>
              <span className="category-text">Upcoming Events</span>
              <span className="category-count">(0)</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Events List */}
        <div className="event-list">
          <h2>Upcoming & Past Events</h2>

          {/* Event Details */}
          <div className="event-card">
            <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671739199868.jpg" alt="BIT Mesra Event" />
            <div className="event-info">
              <h3>Faculty webinar Series by BITMAA-NA</h3>
              <p>Date: February 22, 2025</p>
              <p>Time: 8:00 PM - 9:30 PM</p>
              <p>Location: <a href="https://forms.gle/LLhmeYTMpwsvybFX7" target="_blank">Click Here</a></p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => navigate("/event-details")}>View</button>
            </div>
          </div>

          <div className="event-card">
            <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671694838587.jpg" alt="BIT Mesra Event" />
            <div className="event-info">
              <h3>Faculty Webinar Series by Prof. Aatmesh Shrivastava</h3>
              <p>Date: September 16, 2023</p>
              <p>Time: 8:00 PM - 9:30 PM</p>
              <p>Location: <a href="https://forms.gle/GFTDYE4DZaRD4U1D7" target="_blank">Click Here</a></p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => navigate("/events1")}>View</button>
            </div>
          </div>

          <div className="event-card">
            <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/11953671678460807.jpg" alt="BIT Mesra Event" />
            <div className="event-info">
              <h3>BITMAA-NA webinar series by Mr Rajesh Sharma</h3>
              <p>Date: March 18, 2023</p>
              <p>Time: 8:00 PM - 9:30 PM</p>
              <p>Location: <a href="https://forms.gle/D32f8vuM8NXMRAip9" target="_blank">Click Here</a></p>
              <p>Online event</p>
              <div className="past-event-badge">Past Event</div>
              <button className="view-button" onClick={() => navigate("/events2")}>View</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;
