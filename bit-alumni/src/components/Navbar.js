import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <span className="dropbtn">Events</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/galleries">Galleries</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropbtn">Find Alumni</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/alumni-directory">Alumni Directory</Link>
            </li>
            <li>
              <Link to="/alumni-nearby">Alumni Nearby</Link>
            </li>
            <li>
              <Link to="/invite-batchmates">Invite Batchmates</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropbtn">News & Stories</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/news-stories">All News & Stories</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropbtn">Careers</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/internships">Internships</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
