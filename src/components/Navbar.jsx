import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const load = () => {
      const u = localStorage.getItem("user");
      setUser(u ? JSON.parse(u) : null);
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/chat", label: "Chat" },
    { to: "/notes", label: "Notes" },
    { to: "/youtube", label: "YouTube" },
    { to: "/resume", label: "Resume" },
    { to: "/resources", label: "Resources" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0B0F] border-b border-[#E6D3A3]/15">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3.5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] flex items-center justify-center">
            <span className="text-black font-black text-sm">E</span>
          </div>
          <span className="text-xl font-bold text-[#E6D3A3]">EduNexes</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 rounded-lg text-sm ${
                isActive(to)
                  ? "text-[#E6D3A3] bg-[#E6D3A3]/10"
                  : "text-white/70 hover:text-[#E6D3A3]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* AUTH */}
        <div className="hidden md:flex items-center gap-2" ref={profileRef}>
          {user ? (
            <>
              <span className="text-white text-sm">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-400 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn-outline text-sm px-4 py-2">
                  Login
                </button>
              </Link>

              {/* ✅ FIXED HERE */}
              <Link to="/signup">
                <button className="btn-primary text-sm px-4 py-2">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#E6D3A3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-5 pb-4 space-y-2">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="block text-white py-2">
              {label}
            </Link>
          ))}

          {!user && (
            <>
              <Link to="/login">
                <button className="w-full btn-outline py-2">Login</button>
              </Link>

              <Link to="/signup">
                <button className="w-full btn-primary py-2">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
