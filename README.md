<div align="center">

# EduNexes
## <span style="color: #E6D3A3">AI-Powered Student Operating System</span>

<img src="https://img.shields.io/badge/Status-Active%20Development-E6D3A3?style=for-the-badge&labelColor=0B0B0F" />
<img src="https://img.shields.io/badge/AI-Gemini%20Powered-C8A96E?style=for-the-badge&labelColor=0B0B0F" />
<img src="https://img.shields.io/badge/Stack-React%20%2B%20Node.js-111827?style=for-the-badge" />

> Learn smarter, organize faster, and study with AI in one place

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Architecture](#-system-architecture) • [Project Structure](#-project-structure)

</div>

---

<div style="background: linear-gradient(135deg, #111318 0%, #0B0B0F 100%); padding: 32px; border-radius: 14px; color: white; margin: 28px 0; border: 1px solid rgba(230,211,163,0.18);">

## What is EduNexes?

EduNexes is a full-stack student productivity platform built to combine learning tools, AI workflows, and academic organization in a single interface.

It helps students with:

✨ AI chat for instant doubt solving  
📝 AI notes generation by subject and topic  
🎥 YouTube transcript analysis with summaries and mind maps  
📄 Resume analysis for job-ready improvement  
✅ Personal task tracking with progress and streaks  
📚 Large branch/year-wise academic resource library  

</div>

---

## 🌟 Key Features

<table>
<tr>
<td align="center" width="33%">

### 💬 AI Chat

Instant conversational help for student questions
- Gemini-powered responses
- Fast prompt-to-answer flow
- Clean chat-style interface

</td>
<td align="center" width="33%">

### 📝 Notes Generator

Create study material in seconds
- Subject + topic based generation
- Short or detailed notes
- Bullet or paragraph output

</td>
<td align="center" width="33%">

### 🎥 YouTube AI

Turn videos into study-ready content
- Transcript extraction via Python
- Summary and key points
- Mind-map style output

</td>
</tr>
</table>

<table>
<tr>
<td align="center" width="33%">

### 📄 Resume Analyzer

Get structured resume feedback
- PDF upload support
- Role-based analysis
- Strengths, gaps, and suggestions

</td>
<td align="center" width="33%">

### ✅ Task Tracker

Stay consistent with your goals
- Auth-protected task management
- Priority, due date, and status flow
- Daily streak tracking

</td>
<td align="center" width="33%">

### 📚 Resource Hub

Browse academic material quickly
- Year-wise navigation
- Branch and subject filtering
- Google Drive preview/download links

</td>
</tr>
</table>

---

## 🎯 Core Modules

| Module | What It Does | Backed By |
|---|---|---|
| `AI Chat` | Answers student questions in conversational format | Gemini API |
| `Notes Generator` | Produces structured notes from topic input | Gemini API |
| `YouTube AI` | Fetches transcript and converts it into study output | Python + Gemini |
| `Resume Analyzer` | Reviews PDF resumes for selected job roles | Gemini API |
| `Task Manager` | Saves and updates user tasks with progress states | Express + MongoDB |
| `Auth System` | Signup, login, token-based access | JWT + bcrypt |
| `Resources` | Serves curated subject materials by year/branch | Static React data |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
```bash
React 19
Vite 8
React Router 7
Tailwind CSS 3
Lucide React
React Markdown
jsPDF
tsParticles
```

### Backend
```bash
Node.js
Express
MongoDB + Mongoose
JWT Authentication
bcryptjs
CORS
dotenv
```

### AI + Processing
```bash
Google Gemini API
Python 3
youtube-transcript-api
```

### Deployment
```bash
Vercel-ready frontend
Render-ready backend
Environment-based API URL setup
```

</div>

---

## 🧩 System Architecture

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         EDUNEXES                            ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│                                                              │
│  ┌────────────────────────────┐   ┌────────────────────────┐ │
│  │ React + Vite Frontend      │   │ Responsive UI Layer    │ │
│  │ Pages, routing, state      │   │ Gold-on-dark design    │ │
│  └──────────────┬─────────────┘   └────────────────────────┘ │
│                 │                                            │
│                 ▼                                            │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Express API Layer                                     │  │
│  │ /api/chat /api/notes /api/youtube /api/resume         │  │
│  │ /api/signup /api/login /api/tasks /api/task/complete  │  │
│  └──────────────┬───────────────────────────────┬─────────┘  │
│                 │                               │            │
│         ┌───────▼────────┐             ┌────────▼────────┐   │
│         │ Gemini AI      │             │ MongoDB         │   │
│         │ Text analysis  │             │ Users + Tasks   │   │
│         └───────┬────────┘             └────────┬────────┘   │
│                 │                               │            │
│         ┌───────▼────────┐                      │            │
│         │ Python Script  │                      │            │
│         │ YouTube        │                      │            │
│         │ Transcript API │                      │            │
│         └────────────────┘                      │            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚙️ How It Works

```text
1. User opens EduNexes and selects a tool
2. Frontend sends a request to the Express backend using VITE_API_URL
3. Backend validates input and routes the request
4. Gemini generates notes, chat replies, resume feedback, or study output
5. For YouTube AI, Python fetches transcript first, then Gemini structures it
6. For task tracking, MongoDB stores task state, streaks, and user accounts
7. Frontend renders polished results for study, planning, or export
```

---

## 🚀 Installation

### Prerequisites

- Node.js 18+
- npm
- Python 3
- MongoDB connection string
- Gemini API key

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd EduNexesV4
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Install Python Dependency for YouTube Transcripts

```bash
pip3 install youtube-transcript-api
```

### 5. Configure Environment Variables

Frontend `.env`

```env
VITE_API_URL=http://localhost:5004
```

Backend `backend/.env`

```env
GEMINI_API_KEY_1=your_gemini_api_key
PORT=5004
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 6. Run the App

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
cd backend
npm start
```

Frontend runs at `http://localhost:5173`  
Backend runs at `http://localhost:5004`

---

## 🌐 Deployment Notes

### Frontend
- Add your deployed backend URL in `.env.production`
- Example:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

### Backend
- Deploy `backend/` to Render
- Set `GEMINI_API_KEY_1`, `MONGODB_URI`, `JWT_SECRET`, and `PORT` in Render environment variables

---

## 📚 Project Structure

```bash
EduNexesV4/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── BackgroundAnimation.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Chat.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Notes.jsx
│   │   ├── Resources.jsx
│   │   ├── Resume.jsx
│   │   ├── Signup.jsx
│   │   └── YouTube.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── auth.js
│   ├── server.js
│   ├── transcript.py
│   └── .env
├── .env
├── .env.production
├── package.json
└── README.md
```

---

## 🔐 API Highlights

### AI Routes
- `POST /api/chat`
- `POST /api/notes`
- `POST /api/youtube`
- `POST /api/resume`

### Auth + Productivity Routes
- `POST /api/signup`
- `POST /api/login`
- `GET /api/me`
- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`
- `PATCH /api/task/complete`

---

## 🎨 Design Language

```text
Primary Background   -> #0B0B0F
Surface Card         -> #111318
Accent Gold          -> #E6D3A3
Deep Gold            -> #C8A96E
Secondary Text       -> Gray scale with soft contrast
Typography Mood      -> Elegant, premium, academic
```

The UI follows a premium gold-on-dark aesthetic with:

- soft glow backgrounds
- animated particle layer
- rounded glass-like cards
- mobile-friendly layouts
- consistent CTA and form system

---

## 📈 Current Capabilities

| Capability | Status |
|---|---|
| Authentication | ✅ Working |
| MongoDB task storage | ✅ Working |
| Gemini notes generation | ✅ Working |
| Gemini chat assistant | ✅ Working |
| Resume analysis | ✅ Working |
| YouTube transcript workflow | ✅ Working |
| Resource library navigation | ✅ Working |
| Production env slot for backend URL | ✅ Ready |

---

## 🔮 Future Improvements

- Add forgot-password and profile management
- Add search inside the resources library
- Add chat history persistence
- Add PDF export to more modules
- Add admin panel for managing resources
- Add richer analytics for student progress
- Add tests and CI workflow

---

## 👨‍💻 Author

**Hemachandu Animireddy**

Built with React, Node.js, MongoDB, Python, and Gemini AI.

---

<div align="center" style="margin-top: 32px; padding: 26px; background: linear-gradient(135deg, #111318 0%, #0B0B0F 100%); border-radius: 14px; color: white; border: 1px solid rgba(230,211,163,0.18);">

## Show Your Support

If you like EduNexes, give this project a ⭐ and share it with other students.

**Study smarter. Build consistency. Learn with AI.**

[Back to Top](#edunexes)

</div>
