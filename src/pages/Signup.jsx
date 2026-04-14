import { useState } from "react";
import { Mail, Lock, User, LogIn, Eye, EyeOff, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields"); return false;
    }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return false; }
    if (password !== confirmPassword) { setError("Passwords do not match"); return false; }
    if (!email.includes("@")) { setError("Please enter a valid email address"); return false; }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); setSuccess(false);
    if (!validateForm()) return;
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password: password.trim() }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Signup failed. Please try again.");
      } else {
        setSuccess(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || { name, email }));
        setTimeout(() => { window.location.href = "/"; }, 1500);
      }
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  const strength = !password ? null
    : password.length < 6 ? { text: "Weak", color: "text-red-400", w: "w-1/3", bg: "bg-red-400" }
    : password.length < 10 ? { text: "Fair", color: "text-yellow-400", w: "w-2/3", bg: "bg-yellow-400" }
    : { text: "Strong", color: "text-green-400", w: "w-full", bg: "bg-green-400" };

  return (
    <article className="min-h-screen flex items-center justify-center px-4 py-8 mt-12">
      <Reveal variant="zoom-in" className="w-full max-w-sm">
      <div className="w-full max-w-sm">

        {/* LOGO */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] flex items-center justify-center shadow-lg shadow-[#E6D3A3]/25">
              <span className="text-black font-black text-sm">E</span>
            </div>
            <span className="text-xl font-bold gold-gradient">EduNexes</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Create account</h1>
          <p className="text-gray-500 text-sm mt-1">Join EduNexes and start learning</p>
        </div>

        {/* CARD */}
        <div className="section-card p-6 space-y-4 motion-panel">
          <form onSubmit={handleSignup} className="space-y-4">

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe" className="input-field pl-10" />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" className="input-field pl-10" />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type={showPassword ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password" className="input-field pl-10 pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#E6D3A3] transition-colors">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {strength && (
                <div className="mt-2">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${strength.w} ${strength.bg}`} />
                  </div>
                  <p className={`text-xs mt-1 ${strength.color}`}>{strength.text}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Confirm Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password" className="input-field pl-10 pr-10" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#E6D3A3] transition-colors">
                  {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {password && confirmPassword && password === confirmPassword && (
                <p className="text-xs mt-1 text-green-400 flex items-center gap-1">
                  <Check size={11} /> Passwords match
                </p>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs">
                ✓ Account created! Redirecting...
              </div>
            )}

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="w-3.5 h-3.5 mt-0.5 accent-[#E6D3A3] cursor-pointer shrink-0" />
              <span className="text-xs text-gray-500">I agree to the Terms of Service and Privacy Policy</span>
            </label>

            <button type="submit" disabled={loading}
              className="w-full btn-primary py-2.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <LogIn size={15} />
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-[#13141a] text-xs text-gray-600">Already have an account?</span>
            </div>
          </div>

          <Link to="/login"
            className="block w-full py-2.5 text-center text-sm font-medium text-[#E6D3A3]/70 border border-[#E6D3A3]/15 rounded-xl hover:border-[#E6D3A3]/35 hover:text-[#E6D3A3] transition-all duration-200">
            Sign In
          </Link>
        </div>

        <p className="text-center text-xs text-gray-600 mt-5">
          Join thousands of students learning with EduNexes
        </p>
      </div>
      </Reveal>
    </article>
  );
};

export default Signup;
