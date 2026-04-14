import { Routes, Route, useLocation } from "react-router-dom";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Resume from "./pages/Resume";
import Resources from "./pages/Resources";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white">
      <BackgroundAnimation />
      <Navbar />

      <div key={location.pathname} className="route-shell route-shell-enter">
        <Routes location={location}>
          {/* ✅ MAIN HOME */}
          <Route path="/" element={<Home />} />

          {/* FEATURES */}
          <Route path="/notes" element={<Notes />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chat" element={<Chat />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
