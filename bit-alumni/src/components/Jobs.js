import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      setJobs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to add a job.");
      return;
    }

    try {
      await addDoc(collection(db, "jobs"), {
        title,
        company,
        link,
        description,
        postedBy: auth.currentUser.uid,
        timestamp: new Date(),
      });

      alert("Job added successfully!");
      setTitle("");
      setCompany("");
      setLink("");
      setDescription("");
      setShowForm(false); // Hide form after submission
      fetchJobs(); // Refresh jobs list after submission
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job. Try again!");
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
          <h1>Jobs - BIT Alumni</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Jobs" className="active">Jobs</a></li>
        </ul>
      </nav>
    <div className="jobs-container">
      <h2>Jobs & Internships</h2>

      {/* Debugging to check if showForm state is changing */}
      <button className="add-job-btn" onClick={() => {
        console.log("Before toggle:", showForm);
        setShowForm(prev => !prev);
        console.log("After toggle:", !showForm);
      }}>
        {showForm ? "Close Form" : "➕ Add Job"}
      </button>

      {/* Job Form */}
      {showForm && (
        <div className="job-form">
          <h3>Add a Job</h3>
          <form onSubmit={handleAddJob}>
            <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <input type="text" placeholder="Application Link" value={link} onChange={(e) => setLink(e.target.value)} required />
            <textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* Job Listings */}
      <div className="jobs-list">
        <h3>Available Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h4>{job.title}</h4>
              <p><strong>{job.company}</strong></p>
              <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          ))
        ) : (
          <p>No jobs available yet.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Jobs;
