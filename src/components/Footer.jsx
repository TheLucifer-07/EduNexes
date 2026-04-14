import { Link } from "react-router-dom";
import { MessageSquare, FileText, Play, Briefcase, BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-[#E6D3A3]/10 mt-8 route-shell-enter">
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
      <div className="grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] flex items-center justify-center">
              <span className="text-black font-black text-sm">E</span>
            </div>
            <span className="text-lg font-bold gold-gradient">EduNexes</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your AI-powered student operating system. Learn smarter, not harder.
          </p>
        </div>

        {/* FEATURES */}
        <div>
          <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4">Features</p>
          <ul className="space-y-2.5">
            {[
              { to: "/chat",     icon: <MessageSquare size={13} />, label: "AI Chat"          },
              { to: "/notes",    icon: <FileText size={13} />,      label: "Notes Generator"  },
              { to: "/youtube",  icon: <Play size={13} />,       label: "YouTube AI"       },
              { to: "/resume",   icon: <Briefcase size={13} />,     label: "Resume Analyzer"  },
              { to: "/resources",icon: <BookOpen size={13} />,      label: "Resources"        },
            ].map(({ to, icon, label }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#E6D3A3] transition-colors duration-200">
                  <span className="text-[#E6D3A3]/40">{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4">Account</p>
          <ul className="space-y-2.5">
            {[
              { to: "/",        label: "Home"    },
              { to: "/login",   label: "Login"   },
              { to: "/register",label: "Sign Up" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-gray-500 hover:text-[#E6D3A3] transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4">Contact</p>
          <p className="text-sm text-gray-500">support@edunexes.ai</p>
          <p className="text-sm text-gray-500 mt-2">Made in India 🇮🇳</p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">All systems operational</span>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#E6D3A3]/8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} EduNexes. All rights reserved.</p>
        <p className="text-xs text-gray-600">Built with React + Node.js + Gemini AI</p>
      </div>
    </div>
  </footer>
);

export default Footer;
