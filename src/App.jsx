import { Routes, Route } from "react-router-dom";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import YouTube from "./pages/YouTube";
import Resume from "./pages/Resume";
import Resources from "./pages/Resources";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen text-white">
      <BackgroundAnimation />
      <Navbar />

      <Routes>
        {/* ✅ MAIN HOME */}
        <Route path="/" element={<Home />} />

        {/* FEATURES */}
        <Route path="/notes" element={<Notes />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat" element={<Chat />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
