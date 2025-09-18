from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, auth, firestore

# Initialize Flask App
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Initialize Firebase
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Signup API
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    name = data.get("name")

    try:
        user = auth.create_user(email=email, password=password, display_name=name)
        db.collection("users").document(user.uid).set({
            "name": name,
            "email": email,
            "role": data.get("role", "alumni"),
        })
        return jsonify({"message": "User created successfully!", "user_id": user.uid}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Login API
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    try:
        user = auth.get_user_by_email(email)
        return jsonify({"message": "Login successful!", "user_id": user.uid}), 200
    except Exception as e:
        return jsonify({"error": "Invalid credentials"}), 400

# Get User Profile
@app.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    user_doc = db.collection("users").document(user_id).get()
    if user_doc.exists:
        return jsonify(user_doc.to_dict()), 200
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
