# BIT-Alumni-Management-System

A comprehensive Alumni Management System for BIT Mesra, built using **React.js**, **Node.js**, **Express**, and **MongoDB**. This system allows admins to manage alumni, events, and jobs while providing alumni features like profile management, event participation, job applications, and discussion forums.

---

## Project Structure

```
BIT-Alumni-Management-System/
│
├── backend/                    # Node.js backend
│   ├── controllers/            # API controllers
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── middleware/             # Authentication & middleware
│   ├── node_backend/           # Service account and config
│   └── server.js               # Entry point
│
├── frontend/                   # React frontend
│   ├── public/                 # Static files
│   ├── src/                    # React source code
│   ├── components/             # Reusable components
│   ├── pages/                  # Main pages
│   ├── redux/                  # Redux store and slices
│   └── App.js                  # Main app
│
├── .gitignore                  # Ignored files for Git
├── package.json                # NPM dependencies
├── package-lock.json           # Lock file for dependencies
├── README.md                   # Project documentation
└── LICENSE                     # MIT License
```

---

## Backend Setup

1. Navigate to backend:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start backend server:

```bash
npm start
```

---

## Frontend Setup

1. Navigate to frontend:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start frontend development server:

```bash
npm start
```

The application will run at [http://localhost:3000](http://localhost:3000)

---

## Usage

* **Admin Login**: Manage events and view alumni
* **Alumni Login**: Register and update profile, view events, connect with peers
* **Job Portal**: Post and apply for jobs
* **Forum**: Engage with other alumni through discussions

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature-name
```

3. Make your changes and commit:

```bash
git commit -m "Add new feature"
```

4. Push to your branch:

```bash
git push origin feature-name
```

5. Create a Pull Request describing your changes

**Note:** Please follow coding standards and write clear commit messages.

---

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

## Acknowledgements

* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Bootstrap](https://getbootstrap.com/)

---

## Important Notes

* Make sure to **add your `serviceAccountKey.json` to `.gitignore`** to avoid pushing secrets to GitHub.
* For deployment, ensure MongoDB URI and JWT\_SECRET are properly configured in `.env`.
* If you encounter GitHub push protection due to secrets, remove sensitive files from commit history before pushing.
