const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Signup API
app.post("/signup", async (req, res) => {
    const { email, password, name, role } = req.body;

    try {
        const user = await admin.auth().createUser({
            email,
            password,
            displayName: name,
        });

        await db.collection("users").doc(user.uid).set({
            name,
            email,
            role: role || "alumni",
        });

        res.status(201).json({ message: "User created successfully!", user_id: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login API
app.post("/login", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await admin.auth().getUserByEmail(email);
        res.status(200).json({ message: "Login successful!", user_id: user.uid });
    } catch (error) {
        res.status(400).json({ error: "Invalid credentials" });
    }
});

// Get User Profile
app.get("/user/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    const userRef = db.collection("users").doc(user_id);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
        res.status(200).json(userDoc.data());
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
