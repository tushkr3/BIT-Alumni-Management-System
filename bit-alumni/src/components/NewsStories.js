import React, { useState, useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./NewsStories.css";

const NewsStories = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [stories, setStories] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch news stories from Firestore
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const storiesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStories(storiesData);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required!");
      return;
    }

    try {
      await addDoc(collection(db, "news"), {
        title,
        description,
        link,
        timestamp: new Date(),
      });

      alert("News/Story added successfully!");
      setTitle("");
      setDescription("");
      setLink("");
      setShowForm(false);

      // Refresh stories after submission
      const querySnapshot = await getDocs(collection(db, "news"));
      const updatedStories = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStories(updatedStories);

    } catch (error) {
      console.error("Error adding story:", error);
      alert("Failed to add news/story. Try again!");
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
          <h1>News & Stories - BIT Alumni</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/NewsStories" className="active">News & Stories</a></li>
        </ul>
      </nav>

      {/* Add News Button */}
      <div className="news-container">
        <button className="add-news-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "➕ Add News/Story"}
        </button>

        {/* News Form */}
        {showForm && (
          <div className="news-form">
            <h3>Add a News Story</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title (Required)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Description (Required)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Optional Link (if any)"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {/* Display Submitted News */}
        <div className="news-list">
          <h3>Recent News & Stories</h3>
          {stories.length > 0 ? (
            stories.map((story) => (
              <div key={story.id} className="news-card">
                <h4>{story.title}</h4>
                <p>{story.description}</p>
                {story.link && <a href={story.link} target="_blank" rel="noopener noreferrer">Read More</a>}
              </div>
            ))
          ) : (
            <p>No news stories yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsStories;
