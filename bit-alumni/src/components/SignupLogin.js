import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../firebaseconfig";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore";
import "./SignupLogin.css";

const SignupLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Alumni");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [showAlumniForm, setShowAlumniForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Function to check if user is already an Alumni
  const checkAlumniStatus = async (userId) => {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists() && userDoc.data().role === "Alumni") {
      return true; // Already registered as Alumni
    }
    return false;
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider.setCustomParameters({ prompt: "select_account" }));
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
  
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          role,
        });
      }
  
      navigate("/");
    } catch (error) {
      alert("Signup failed! " + error.message);
    }
  };
  
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role,
      });
  
      if (role === "Alumni") {
        setShowAlumniForm(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Signup failed! " + error.message);
    }
  };
  

  // Handle Email Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Alumni Form Submission
  const handleAlumniFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "alumni", auth.currentUser.uid), {
        name,
        contact,
        linkedin,
        email,
      });
  
      setSuccessMessage("Alumni Registration Successful! Redirecting to Home...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/488.jpg" alt="Logo" className="logo" />
          <h1>Birla Institute of Technology Mesra Alumni Interaction</h1>
        </div>
      </header>

      <div className="auth-container">
        <div className="auth-box info-box">
          <h3>Choose any one of the following to Signup/Login.</h3>

          {/* Role Selection */}
          <div className="role-selection">
            <label>
              <input type="radio" name="role" value="Alumni" checked={role === "Alumni"} onChange={(e) => setRole(e.target.value)} />
              Alumni
            </label>
            <label>
              <input type="radio" name="role" value="Student" checked={role === "Student"} onChange={(e) => setRole(e.target.value)} />
              Student
            </label>
          </div>

          <button className="social-btn google" onClick={handleGoogleSignup}>Connect with Google</button>

          <div className="or-divider"><span>OR</span></div>

          {/* Email Login Form */}
          <form>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" onClick={handleEmailSignup}>Sign Up</button>
            <button type="submit" onClick={handleEmailLogin}>Login</button>
          </form>
        </div>

        {/* Alumni Form (Only on first signup as Alumni) */}
        {showAlumniForm && (
          <div className="auth-box info-box">
            <h3>Alumni Registration Form</h3>
            <form onSubmit={handleAlumniFormSubmit}>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Contact No." value={contact} onChange={(e) => setContact(e.target.value)} required />
              <input type="text" placeholder="LinkedIn Profile Link" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default SignupLogin;
