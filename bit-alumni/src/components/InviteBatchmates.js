import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import "./InviteBatchmates.css";

const InviteBatchmates = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [successMessage, setSuccessMessage] = useState("");

  const siteURL = "https://alumni.bitmesra.ac.in/invite"; // Change this to your actual website URL

  // Function to handle social media sharing
  const handleShare = (platform) => {
    let shareURL = "";
    switch (platform) {
      case "facebook":
        shareURL = `https://www.facebook.com/sharer/sharer.php?u=${siteURL}`;
        break;
      case "whatsapp":
        shareURL = `https://api.whatsapp.com/send?text=Join%20BITMAA%20Alumni%20Community:%20${siteURL}`;
        break;
      case "linkedin":
        shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${siteURL}`;
        break;
      case "telegram":
        shareURL = `https://t.me/share/url?url=${siteURL}&text=Join%20BITMAA%20Alumni%20Community!`;
        break;
      case "twitter":
        shareURL = `https://twitter.com/intent/tweet?url=${siteURL}&text=Join%20BITMAA%20Alumni%20Community!`;
        break;
      default:
        return;
    }
    window.open(shareURL, "_blank");
  };

  // Function to handle invite submission
  const handleInvite = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "invites"), {
        name,
        email,
        role,
        timestamp: new Date(),
      });

      setSuccessMessage("Invite sent successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);

      // Clear input fields
      setName("");
      setEmail("");
      setRole("student");
    } catch (error) {
      console.error("Error sending invite:", error);
      alert("Failed to send invite. Please try again.");
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
          <h1>Invite Batchmates</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/invite-batchmates" className="active">
              Invite Batchmates
            </Link>
          </li>
        </ul>
      </nav>

      {/* Invite Section */}
      <div className="invite-container">
        <img
          src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/488.jpg?v=1713160040"
          alt="BITMAA Logo"
          className="invite-logo"
        />
        <h2>Invite your connections to join the BITMAA Community</h2>

        {/* Social Media Share Buttons */}
        <div className="social-icons">
          <button onClick={() => handleShare("facebook")} className="icon-button">
            <FaFacebookF className="icon facebook" />
          </button>
          <button onClick={() => handleShare("whatsapp")} className="icon-button">
            <FaWhatsapp className="icon whatsapp" />
          </button>
          <button onClick={() => handleShare("linkedin")} className="icon-button">
            <FaLinkedinIn className="icon linkedin" />
          </button>
          <button onClick={() => handleShare("telegram")} className="icon-button">
            <FaTelegram className="icon telegram" />
          </button>
          <button onClick={() => handleShare("twitter")} className="icon-button">
            <FaXTwitter className="icon twitter" />
          </button>
        </div>

        {/* Invite via Email */}
        <div className="invite-form">
          <h3>Invite via Email</h3>
          <form onSubmit={handleInvite}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="faculty">Faculty</option>
            </select>
            <button type="submit">Send Invite</button>
          </form>

          {/* Success Message */}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default InviteBatchmates;
