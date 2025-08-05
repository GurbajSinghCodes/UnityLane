# UnityLane Portal

A simple web portal that allows users to register as candidates for the HopeBridge platform. It includes a public homepage, candidate registration form, and an admin panel with login and dashboard functionalities.

---

## 🚀 Features

- 🏠 **Homepage** with introduction to the portal
- 📝 **Candidate Registration Form** to collect applicant data
- 🔐 **Admin Login Panel** for secure access
- 📊 **Admin Dashboard** to view registered candidate data
- 🔄 Session management with token-based auth using JWT
- ⚙️ Fully responsive and user-friendly UI

---

## 📁 Project Structure

- `frontend/` – Frontend built with React
    - `public/` – Public files like icons, images etc.
    - `src/` 
        - `assets/`
        - `components/` 
        - `styles/`
        - App.jsx
        - main.jsx
        - App.css
- `backend/` – Backend using Node.js, Express, MongoDB
    - `models/` – Mongoose models for data schema
    - `routes/` – API routes for candidates and admin
    - `middleware/`  – Middleware functions used throughtout the project
### Routes Overview (Client)
- `/` - Homepage
- `/register` -	Candidate Registration
- `/admin` -	Admin login form
- `/admin/dashboard` -	Admin dashboard to view candidates


---

## 🧪 Demo Admin Credentials

For assignment/demo purposes:

```txt
Email: admin@demo
Password: admin123

Use these to log in from "/admin" route and access the dashboard.

🛠️ Tech Stack
Frontend: React, React Router, Axios,  CSS Modules

Backend: Node.js, Express

Database: MongoDB (with Mongoose)

Authentication: JWT (JSON Web Tokens)
```


