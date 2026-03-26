# 🌐 Social Media Frontend

A modern and responsive React-based frontend for a mini social media application inspired by TaskPlanet. Users can explore a public feed, create posts, and interact through likes and comments with a clean and intuitive UI.

---

## 🚀 Live Demo

https://social-frontend-psi.vercel.app/

---

## 📌 Features

* 🔐 User Authentication (Login & Signup)
* 🌍 Public Feed (accessible without login)
* 📝 Create Posts (Text & Image)
* ❤️ Like / Unlike Posts
* 💬 Comment on Posts
* 🔄 Real-time UI updates after interactions
* 📱 Fully Responsive Design
* 🎨 Clean UI inspired by TaskPlanet

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **UI Library:** Material UI + Bootstrap
* **State Management:** React Hooks (useState, useEffect)
* **API Handling:** Fetch API (centralized service layer)
* **Routing:** React Router DOM
* **Deployment:** Vercel

---

## 📁 Folder Structure

```id="gkjr1t"
frontend/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── CreatePost.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Feed.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
```

---

## 🔗 API Integration

All API calls are handled through a centralized service:

```id="s4ox9c"
const BASE_URL = import.meta.env.VITE_API_URL;
```

### Example:

```id="3z7dmt"
await request("/posts");
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash id="3ep2dt"
git clone https://github.com/your-username/frontend-repo.git
cd frontend-repo
```

---

### 2️⃣ Install Dependencies

```bash id="j6km5d"
npm install
```

---

### 3️⃣ Create `.env` file

```env id="t7y5yz"
VITE_API_URL=https://your-backend.onrender.com/api
```

---

### 4️⃣ Run Development Server

```bash id="6rryil"
npm run dev
```

---

## 🔐 Authentication Flow

* User logs in via API
* Backend sets HTTP-only cookie
* Frontend uses `/me` endpoint to verify login state
* Protected actions (post, like, comment) require authentication

---

## 🎨 UI & UX Highlights

* Responsive layout using Bootstrap grid
* Material UI components for modern design
* Dynamic rendering of posts, likes, and comments
* Clean and minimal user interface

---

## 🌍 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## ⚠️ Important Notes

* Cookies handled using:

  * `credentials: "include"`
* Cross-origin requests configured properly with backend CORS
* SPA routing fixed using `vercel.json` rewrite rule

---

## 🧠 Key Learnings

* Built responsive UI with React and Material UI
* Managed authentication using cookies
* Handled API integration using centralized services
* Solved real-world deployment issues (CORS, cookies, routing)
* Implemented scalable component-based architecture

---

## 🤝 Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.

---

## 📧 Contact

**Dipak Ghuge**
Full Stack Developer (MERN Stack)
