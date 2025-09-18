import React from "react";
import { Link } from "react-router-dom";
import "./Galleries.css"; // Ensure styles are applied

const Gallery = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Birla Institute of Technology Mesra Alumni Interaction</h1>
        </div>
        {/* <button className="auth-button" onClick={() => (window.location.href = "/signup-login")}>
          Sign Up/Login
        </button> */}
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Events</a>
            <ul className="dropdown-content">
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Galleries</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Find Alumni</a>
            <ul className="dropdown-content">
              <li>
                <Link to="/AlumniDirectory">Alumni Directory</Link>
              </li>
              <li>
                <Link to="/InviteBatchmates">Invite Batchmates</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">News & Stories</a>
            <ul className="dropdown-content">
              <li>
                <Link to="/NewsStories">All News & Stories</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Careers</a>
            <ul className="dropdown-content">
              <li>
                <Link to="/Jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/Internships">Internships</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Gallery Categories Title */}
      <div className="gallery-title">
        <h2>GALLERY CATEGORIES</h2>
      </div>

      {/* Gallery Categories Section */}
      <section className="gallery-container">
        <aside className="gallery-categories">
          <ul>
            <li className="category-list active-category">
              <span className="category-text">All</span>
              <span className="category-count">(4)</span>
            </li>
          </ul>
        </aside>

        {/* Gallery Images Section */}
        <div className="gallery-content">
          <div className="gallery-card">
            <Link to="/FoundationDay2024">
              <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1721116663_m57ZFp6vQH.jpg" alt="Foundation Day 2024" />
            </Link>
            <h3>Foundation Day 2024</h3>
            <p>12 Items</p>
          </div>

          <div className="gallery-card">
            <Link to="/FoundationDay2022">
              <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1659606364_ttC0uGgp6Z.jpg" alt="Foundation Day 2022" />
            </Link>
            <h3>Foundation Day 2022</h3>
            <p>10 Items</p>
          </div>

          <div className="gallery-card">
            <Link to="/AlumniMeet2022">
              <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1648983462_vOjGXJJPJB.jpg" alt="Alumni Meet 2022" />
            </Link>
            <h3>Alumni Meet 2022</h3>
            <p>3 Items</p>
          </div>

          <div className="gallery-card">
            <Link to="/E-summit2021">
              <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1615779060_QLLUBNIcLn.jpg" alt="E Summit 2021" />
            </Link>
            <h3>E Summit 2021</h3>
            <p>5 Items</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
