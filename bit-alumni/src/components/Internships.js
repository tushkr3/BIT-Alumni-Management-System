import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./Internships.css"; // Using the same CSS file as Jobs

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "internships"));
      setInternships(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  const handleAddInternship = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to add an internship.");
      return;
    }

    try {
      await addDoc(collection(db, "internships"), {
        title,
        company,
        link,
        description,
        postedBy: auth.currentUser.uid,
        timestamp: new Date(),
      });

      alert("Internship added successfully!");
      setTitle("");
      setCompany("");
      setLink("");
      setDescription("");
      setShowForm(false); // Hide form after submission
      fetchInternships(); // Refresh internships list after submission
    } catch (error) {
      console.error("Error adding internship:", error);
      alert("Failed to add internship. Try again!");
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
          <h1>Internships - BIT Alumni</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Internships" className="active">Internships</a></li>
        </ul>
      </nav>

    <div className="jobs-container">
      <h2>Internships</h2>

      <button className="add-job-btn" onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? "Close Form" : "➕ Add Internship"}
      </button>

      {showForm && (
        <div className="job-form">
          <h3>Add an Internship</h3>
          <form onSubmit={handleAddInternship}>
            <input type="text" placeholder="Internship Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <input type="text" placeholder="Application Link" value={link} onChange={(e) => setLink(e.target.value)} required />
            <textarea placeholder="Internship Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="jobs-list">
        <h3>Available Internships</h3>
        {internships.length > 0 ? (
          internships.map((internship) => (
            <div key={internship.id} className="job-card">
              <h4>{internship.title}</h4>
              <p><strong>{internship.company}</strong></p>
              <a href={internship.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          ))
        ) : (
          <p>No internships available yet.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Internships;