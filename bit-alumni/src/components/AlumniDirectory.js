import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import "./AlumniDirectory.css";

const AlumniDirectory = () => {
  const [alumniList, setAlumniList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "alumni"));
        const alumniData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlumniList(alumniData);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchAlumni();
  }, []);

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
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>

      {/* Alumni Directory Section */}
      <div className="alumni-directory">
        <h2>Alumni Directory</h2>
        <div className="alumni-list">
          {alumniList.length > 0 ? (
            alumniList.map((alumni) => (
              <div key={alumni.id} className="alumni-card">
                <h3>{alumni.name}</h3>
                <p><strong>Email:</strong> {alumni.email}</p>
                <p><strong>Contact:</strong> {alumni.contact}</p>
                <p><strong>LinkedIn:</strong> <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
              </div>
            ))
          ) : (
            <p className="no-data">No Alumni Registered Yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
