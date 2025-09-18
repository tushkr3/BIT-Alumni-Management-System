import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(null);  // To track form submission status
  const alumniContainerRef = useRef(null);
  const awardWinnerRef = useRef(null);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const openModal = (alumni) => {
    setSelectedAlumni(alumni);
  };

  const closeModal = () => {
    setSelectedAlumni(null);
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Redirect unauthenticated users to signup-login
  const handleNavigation = (path) => {
    if (!user) {
      navigate("/signup-login");
    } else {
      navigate(path);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/signup-login");
  };

  // Smooth Scrolling Function
  const scrollSection = (ref, direction) => {
    if (ref.current) {
      const container = ref.current;
      const scrollAmount = container.clientWidth / 2;
      container.scrollLeft += direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setFormStatus("Message sent successfully!");
      // Reset the form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setFormStatus("Please fill in all fields.");
    }
  };
  

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img
            src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/./assets/images/institutes/logo/170x170/488.jpg"
            alt="Logo"
            className="logo"
          />
          <h1>Birla Institute of Technology Mesra Alumni Interaction</h1>
        </div>
        {/* Show Logout if logged in, else show Signup/Login */}
        {user ? (
          <button className="auth-button" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="auth-button" onClick={() => navigate("/signup-login")}>
            Sign Up/Login
          </button>
        )}
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#" onClick={() => handleNavigation("/")}>Home</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Events</a>
            <ul className="dropdown-content">
              <li><a href="#" onClick={() => handleNavigation("/events")}>Events</a></li>
              <li><a href="#" onClick={() => handleNavigation("/Gallery")}>Galleries</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Find Alumni</a>
            <ul className="dropdown-content">
              <li><a href="#" onClick={() => handleNavigation("/AlumniDirectory")}>Alumni Directory</a></li>
              <li><a href="#" onClick={() => handleNavigation("/invite-batchmates")}>Invite Batchmates</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">News & Stories</a>
            <ul className="dropdown-content">
              <li><a href="#" onClick={() => handleNavigation("/NewsStories")}>All News & Stories</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Careers</a>
            <ul className="dropdown-content">
              <li><a href="#" onClick={() => handleNavigation("/Jobs")}>Jobs</a></li>
              <li><a href="#" onClick={() => handleNavigation("/Internships")}>Internships</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h2>Welcome to BITMAI</h2>
          <p>(Birla Institute of Technology Mesra Alumni Interaction)</p>
        </div>
      </section>

      {/* Notable Alumni Section */}
      <section className="notable-alumni">
        <h3 className="about-title">Notable Alumni</h3>
        <div className="alumni-carousel">
        <button className="prev-btn" onClick={() => scrollSection(alumniContainerRef, "left")}>&#10094;</button>
          <div className="alumni-wrapper">
            <div className="alumni-container" ref={alumniContainerRef}>
              {[
                {
                  name: "Abhishek Sinha",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581664197_1ao3B3QGrs.jpg",
                  batch: "BE, ECE Batch of 1999",
                  role: "Eko India Financial Services Co-founder & CEO",
                  link: "https://www.linkedin.com/in/cofounderateko-abhisheksinha/",
                },
                {
                  name: "Alok Chaturvedi",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581655849_h5oclX84Xp.jpg",
                  batch: "BSc, Mechanical Engineering Batch of 1980",
                  role: "Purdue University, Professor & Director, ISEEK",
                  link: "https://business.purdue.edu/directory/bio.php?username=alok",
                },
                {
                  name: "Amit Kumar Sinha",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1713243595_xYXV7AlJhx.jpg",
                  batch: "BE Electrical & Electronics 1990-94",
                  role: "CEO/Managing Director, Mahindra Lifespace",
                  link: "https://www.linkedin.com/in/amitsinha3/?originalSubdomain=in",
                },
                {
                  name: "Amitava Bakshi",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1593150888_0igzadYhl9.jpg",
                  batch: "Former Chief Procurement Officer, Tata Steel",
                  link: "https://www.linkedin.com/in/amitava-bakshi-6a8931a9/details/education/",
                },
                {
                  name: "Anjan Lahiri",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581914257_ZgwkwqA4sj.jpg",
                  batch: "BE, Electrical and Electronics Eng. Batch of 1987 ",
                  role: " CEO Navikenz",
                  link: "https://www.linkedin.com/in/anjan-lahiri-76b236/",
                },
                {
                  name: "Aroop Zutshi",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1620878475_ogWbrrdMP5.jpg",
                  batch: "BE, Mechanical batch of 1980-84",
                  role: "Co-President/Managing Partner, Frost & Sullivan",
                  link: "https://www.linkedin.com/in/aroopzutshi/",
                },
                {
                  name: "Arun Nathan",
                  img: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1581664074_vtI8AFTBOs.jpg",
                  batch: "BE, Electrical Engg. Batch of 1969",
                  role: "GERB Vibration Control systems Pvt.ltd. Director",
                },
              ].map((alumni) => (
                <div className="alumni-card" key={alumni.name}>
                  <a href={alumni.link} target="_blank" rel="noopener noreferrer">
                    <img src={alumni.img} alt={alumni.name} />
                  </a>
                  <h4>{alumni.name}</h4>
                  <p>{alumni.batch}</p>
                  <p>{alumni.role}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="next-btn" onClick={() => scrollSection(alumniContainerRef, "right")}>&#10095;</button>
        </div>
      </section>
      {/* Space Between Sections */}
      <div style={{ marginBottom: "100px" }}></div>

             {/* Distinguished Alumni Award Winner 2024 */}
    <section className="distinguished-alumni">
        <h3 className="about-title">Distinguished Alumni Award Winner 2024</h3>
        <div className="alumni-carousel">
        <button className="prev-btn" onClick={() => scrollSection(awardWinnerRef, "left")}>&#10094;</button>
          <div className="alumni-wrapper">
            <div className="alumni-container" ref={awardWinnerRef}>
              {/* Distinguished Alumni Cards */}
              {[
                {
                  name: "Jaya Singh Panda",
                  batch: "B.E (Electrical & Electronics Communication) (1985 - 1989)",
                  image: "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1724838442_W1e2hvBvTw.jpg",
                  description: "Distinguished Alumni Award for Leadership in Corporate world, Industry, Academia and Research Institutions.",
                },
                {
                  name: "Tanuja Prasad",
                  batch: "B.E (Electrical & Electronics Engineering) (1981 - 1985)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724838154_epWlYQbjYq.jpg",
                  description: "Distinguished Alumni Award for 'Contributions to Engineering, Technology and Entrepreneurship’  (Distinguished Alumna Award)",
                },
                {
                  name: "Aatmesh Shrivastava",
                  batch: "B.E (Electronics & Communication Engineering) (2002 - 2006)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724837887_zTmQIkOeQd.jpg",
                  description: "Distinguished Alumni Award for ' Service to Society in India and abroad including support to the alma mater’  (Young Alumnus Award)'",
                },
                {
                  name: "Sushant Gaurav",
                  batch: "B.E (Electrical & Electronics Engineering) (2004 - 2008)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724837659_7iWliAcqHg.jpg",
                  description: "Distinguished Alumni Award for 'Service to Society in India and abroad, including Support to alma mater'",
                },
                {
                  name: "Aditya Ranjan",
                  batch: "B.E (Civil Engineering) (1987 - 1991)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724836982_2drmJHvshr.jpg",
                  description: "Distinguished Alumni Award for 'Service to Society in India and abroad, including Support to alma mater'",
                },
                {
                  name: "K P J Reddy",
                  batch: "Ph.D (Department of Physics) (1981)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724836766_RNVFucRZRA.jpg",
                  description: "Distinguished Alumni Award for 'Excellence in Teaching and Research in Engineering and Technology'",
                },
                {
                  name: "Deven Sharma",
                  batch: "B.Sc (Mechanical Engineering) (1972 - 1977)",
                  image: "https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1724836508_Kvcj0sU9ys.jpg",
                  description: "Distinguished Alumni Award for ' Leadership in Corporate world, Industry, Academia and Research Institutions",
                },
              ].map((alumni, index) => (
                <div className="alumni-card" key={index}>
                  <a href="#">
                    <img src={alumni.image} alt={alumni.name} />
                  </a>
                  <h4>{alumni.name}</h4>
                  <p>{alumni.batch}</p>
                  <p>{alumni.position}</p>
                  <button onClick={() => openModal(alumni)} className="read-more-btn">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="next-btn" onClick={() => scrollSection(awardWinnerRef, "right")}>&#10095;</button>
        </div>

        {/* Modal - Opens for Selected Alumni */}
        {selectedAlumni && (
          <div className="modal__below_header mdl-shadow--2dp">
            <div className="mdl-grid padding-0">
              <div className="mdl-cell--12-col margin-0 maximize-width">
                <i
                  className="icon-clear abs-pos font-20"
                  style={{ cursor: "pointer", right: "8px", top: "8px" }}
                  onClick={closeModal}
                >
                  &times;
                </i>

                {/* Profile Image */}
                <div className="padding-top-16 center-alignment">
                  <div className="padding-16">
                    <img
                      src={selectedAlumni.image}
                      alt={selectedAlumni.name}
                      style={{
                        maxHeight: "90px",
                        maxWidth: "120px",
                        borderRadius: "4px",
                      }}
                    />
                    <div className="padding-top-8 font-20 mdl-color-text--black mdl-typography--font-medium">
                      {selectedAlumni.name}
                    </div>
                    <div className="padding-top-6 font-16">{selectedAlumni.batch}</div>
                    <div className="padding-top-6 font-16">{selectedAlumni.position}</div>
                  </div>
                </div>

                {/* Award Description */}
                <div className="award-description">
                  <div
                    className="padding-24 font-14 overflow-auto scrollbar-thin-grey-firefox scrollbar-thin-grey"
                    style={{ maxHeight: "270px", borderTop: "1px solid lightgrey" }}
                  >
                    {selectedAlumni.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
       {/* Space Between Sections */}
       <div style={{ marginBottom: "100px" }}></div>
    
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Form */}
          <div className="footer-section contact-form">
          <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>

            {/* Success Popup */}
            {formStatus && <div className="form-status">{formStatus}</div>}
          </div>


          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
             <li><a href="#" onClick={() => handleNavigation("/AlumniDirectory")}>Alumni Directory</a></li>
              <li><a href="#" onClick={() => handleNavigation("/events")}>Events</a></li>
              <li><a href="#" onClick={() => handleNavigation("/Jobs")}>Jobs</a></li>
              <li><a href="#" onClick={() => handleNavigation("/Internships")}>Internships</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Birla Institute of Technology Mesra. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
