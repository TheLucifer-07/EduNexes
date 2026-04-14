import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [isScrolled, setIsScrolled]       = useState(false);
  const [user, setUser]                   = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const location   = useLocation();
  const navigate   = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const load = () => {
      const u = localStorage.getItem("user");
      setUser(u ? JSON.parse(u) : null);
    };
    load();
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setShowProfileMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowProfileMenu(false);
    navigate("/login");
  };

  const links = [
    { to: "/",         label: "Home"      },
    { to: "/chat",     label: "Chat"      },
    { to: "/notes",    label: "Notes"     },
    { to: "/youtube",  label: "YouTube"   },
    { to: "/resume",   label: "Resume"    },
    { to: "/resources",label: "Resources" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#0B0B0F] border-b border-[#E6D3A3]/15`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3.5">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] flex items-center justify-center shadow-lg shadow-[#E6D3A3]/20">
              <span className="text-black font-black text-sm">E</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#E6D3A3] to-[#C8A96E] bg-clip-text text-transparent">
              EduNexes
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(to)
                  ? "text-[#E6D3A3] bg-[#E6D3A3]/10"
                  : "text-white/70 hover:text-[#E6D3A3] hover:bg-[#E6D3A3]/5"
              }`}>
                {label}
                {isActive(to) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6D3A3] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* AUTH / AVATAR */}
          <div className="hidden md:flex items-center gap-2.5" ref={profileRef}>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-[#E6D3A3]/20 hover:border-[#E6D3A3]/40 bg-[#E6D3A3]/5 hover:bg-[#E6D3A3]/10 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] text-black font-bold text-sm flex items-center justify-center">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-white/80 font-medium max-w-[80px] truncate">{user.name}</span>
                  <ChevronDown size={13} className={`text-[#E6D3A3]/60 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`} />
                </button>

                {showProfileMenu && (
                  <div className="absolute top-full right-0 mt-2 w-52 bg-[#13141a]/98 border border-[#E6D3A3]/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                    <div className="px-4 py-3.5 border-b border-[#E6D3A3]/10">
                      <p className="text-white font-semibold text-sm">{user.name}</p>
                      <p className="text-[#E6D3A3]/50 text-xs mt-0.5 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2.5 transition-colors duration-200"
                    >
                      <LogOut size={14} />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn-outline text-sm py-2 px-4">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn-primary text-sm py-2 px-4">Sign Up</button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE — avatar next to toggle */}
          <div className="md:hidden flex items-center gap-2">
            {user && (
              <button
                onClick={handleLogout}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] text-black font-bold text-sm flex items-center justify-center"
                title={`${user.name} — tap to sign out`}
              >
                {user.name?.charAt(0).toUpperCase()}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#E6D3A3] hover:bg-[#E6D3A3]/10 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-1 border-t border-[#E6D3A3]/10 pt-3 fade-up bg-[#060608]/98 rounded-2xl px-3 py-3 shadow-2xl shadow-black/60">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive(to) ? "text-[#E6D3A3] bg-[#E6D3A3]/10" : "text-white/70 hover:text-[#E6D3A3] hover:bg-[#E6D3A3]/5"
              }`}>
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E6D3A3]/10 flex gap-2">
              {user ? (
                <button onClick={handleLogout} className="w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium flex items-center justify-center gap-1.5">
                  <LogOut size={14} /> Sign out
                </button>
              ) : (
                <>
                  <Link to="/login" className="flex-1">
                    <button className="w-full btn-outline text-sm py-2">Login</button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <button className="w-full btn-primary text-sm py-2">Sign Up</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
