
# 🚗 Vroomy – Rent & Roam

Vroomy is a full-stack car rental web application that allows users to browse, list, and book vehicles online. Built with the **MERN stack**, Vroomy offers a seamless user experience for both renters and vehicle owners. The platform features a responsive UI, real-time listings, secure authentication, and intuitive booking management.

🔗 **Live Demo**: [https://vroomy-mocha.vercel.app/](https://vroomy-mocha.vercel.app/)

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🚘 List and manage rental cars
- 📅 Book vehicles with date selection
- 👤 User authentication with JWT
- 🗃️ Image uploads via ImageKit
- ⚙️ Admin car management panel
- 🌐 Fully responsive UI with TailwindCSS
- 🔥 Toast notifications for feedback

---

## 🧱 Tech Stack

### Frontend (React + Vite)
- React 19
- Tailwind CSS 4
- React Router v7
- Axios
- React Hot Toast
- Vite

### Backend (Node.js + Express)
- Node.js
- Express 5
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Multer for file uploads
- ImageKit API for media hosting
- dotenv, cors

---

## 🛠️ Installation

### Prerequisites
- Node.js >= 18.x
- MongoDB
- ImageKit Account (for image uploads)

### 1. Clone the Repository

```bash
git clone https://github.com/suminyol/Vroomy.git
cd Vroomy
```

### 2. Install Client Dependencies

```bash
cd client
npm install
```

### 3. Install Server Dependencies

```bash
cd ../server
npm install
```

---

## 🚀 Usage

### Start the Development Server

```bash
# In one terminal
cd server
npm run server

# In another terminal
cd client
npm run dev
```

---

## 📁 Project Structure

```
Vroomy/
├── client/          # React frontend with Vite
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── ...
├── server/          # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── .env.example
```

---

## 🔐 Environment Variables

Create `.env` files in both `client` and `server` folders with appropriate keys.

### `.env` (server)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

---

## 📡 API Overview (Backend)

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/api/auth/register`  | Register user            |
| POST   | `/api/auth/login`     | Login user               |
| GET    | `/api/cars`           | Get all cars             |
| POST   | `/api/cars`           | Add new car (admin/user) |
| PUT    | `/api/cars/:id`       | Update car info          |
| DELETE | `/api/cars/:id`       | Remove car               |
| POST   | `/api/bookings`       | Book a car               |
| GET    | `/api/bookings`       | Get user bookings        |

---

## 🖼️ Screenshots

> _(Add screenshots or GIFs here to visually showcase UI and workflows)_
---WorkFlow---
![Workflow](vroomy_workflow_diagram.png)

---User Section---
![Hero Section](<Screenshot 2025-07-16 053633.png>)
![Featured vehicles](<Screenshot 2025-07-16 053704.png>)
![List Your car](<Screenshot 2025-07-16 053716.png>)
![Available cars](<Screenshot 2025-07-16 054348.png>)
![My bookings](image.png)

---Owner Section---
![Admin dashboard](<Screenshot 2025-07-16 053746.png>)
![Manage cars](<Screenshot 2025-07-16 053758.png>)
![Manage bookings](<Screenshot 2025-07-16 053809.png>)
![Add new car](<Screenshot 2025-07-16 053822.png>)
---

## 🛠️ Troubleshooting

- Ensure MongoDB is running locally or via Atlas.
- Double-check `.env` configs for typos or missing keys.
- Use proper CORS configuration if deploying frontend/backend separately.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

---


## 👤 Author

**[suminyol](https://github.com/suminyol)**  
Built with ❤️ using the MERN stack.

