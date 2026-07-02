# ChatSphere

A modern full-stack real-time chat application built with **Node.js, Express, MongoDB, Socket.io, React, and Vite**. ChatSphere enables instant messaging with secure authentication, persistent message storage, media sharing, and a responsive user interface.

---

## Features

- Secure user authentication using JWT and HTTP-only cookies
- Real-time one-to-one messaging with Socket.io
- Persistent chat history stored in MongoDB
- Image and file uploads using Cloudinary
- Transactional email support with Resend
- Fast frontend built with React + Vite
- Modern responsive UI using Tailwind CSS
- RESTful API architecture
- Production-ready deployment with frontend served from the backend

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Zustand
- Axios
- Socket.io Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT Authentication
- Cookie Parser
- Cloudinary
- Resend
- Dotenv

---

# 📁 Project Structure

```
ChatSphere
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── lib
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Architecture

```
React + Vite Frontend
          │
          │ REST API
          ▼
 Node.js + Express Server
          │
          ├──────── Socket.io
          │              │
          ▼              ▼
     MongoDB        Connected Clients
          │
          ▼
     Cloudinary
          │
          ▼
       Resend
```

---

# 📦 Installation

## Prerequisites

- Node.js (LTS)
- npm
- MongoDB (Local or Atlas)

---

## 1. Clone the Repository

```bash
git clone <repository-url>

cd ChatSphere
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development

CLIENT_URL=http://localhost:5173

RESEND_API_KEY=your_resend_api_key

EMAIL_FROM=example@example.com

EMAIL_FROM_NAME=ChatSphere

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

ARCJET_KEY=your_arcjet_key

ARCJET_ENV=development
```

Start the backend:

```bash
npm run dev
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

# 🚀 Production Build

Build the frontend:

```bash
cd frontend

npm run build
```

Start the backend in production mode:

```bash
cd ../backend

NODE_ENV=production npm start
```

The Express server will automatically serve the React build from the `frontend/dist` directory.

---

# 📜 Available Scripts

## Backend

```bash
npm run dev
```

Starts the backend using Nodemon.

```bash
npm start
```

Starts the production server.

---

## Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Login user             |
| GET    | `/api/auth/me`       | Get authenticated user |

---

## Messages

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | `/api/messages/:chatId` | Get chat messages  |
| POST   | `/api/messages`         | Send a new message |

---

# 🔐 Environment Variables

| Variable              | Description               |
| --------------------- | ------------------------- |
| PORT                  | Server port               |
| MONGO_URI             | MongoDB connection string |
| JWT_SECRET            | JWT secret                |
| CLIENT_URL            | Frontend URL              |
| NODE_ENV              | Development or Production |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name     |
| CLOUDINARY_API_KEY    | Cloudinary API key        |
| CLOUDINARY_API_SECRET | Cloudinary API secret     |
| RESEND_API_KEY        | Resend API key            |
| EMAIL_FROM            | Sender email              |
| EMAIL_FROM_NAME       | Sender name               |
| ARCJET_KEY            | Arcjet key                |
| ARCJET_ENV            | Arcjet environment        |

---

# 📂 Important Files

```
backend/src/server.js
```

Main Express server and Socket.io configuration.

```
backend/src/lib/env.js
```

Loads and exports environment variables.

```
frontend/src
```

Contains the React application source code.

---

# 🌍 Deployment

1. Build the frontend

```bash
npm run build
```

2. Configure all environment variables on the server.

3. Start the backend

```bash
NODE_ENV=production npm start
```

The backend serves the built frontend automatically.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Rohan Koriya**

If you found this project helpful, consider giving it a ⭐ on GitHub.
