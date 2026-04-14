import { useState } from "react";
import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); setSuccess(false);
    if (!email.trim() || !password.trim()) { setError("Please fill in all fields"); return; }
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Login failed. Please try again.");
      } else {
        setSuccess(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || { name: email.split("@")[0], email }));
        setTimeout(() => { window.location.href = "/"; }, 1500);
      }
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm fade-up">

        {/* LOGO */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] flex items-center justify-center shadow-lg shadow-[#E6D3A3]/25">
              <span className="text-black font-black text-sm">E</span>
            </div>
            <span className="text-xl font-bold gold-gradient">EduNexes</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* CARD */}
        <div className="section-card p-6 space-y-4">

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-10" />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type={showPassword ? "text" : "password"} value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input-field pl-10 pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#E6D3A3] transition-colors">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 accent-[#E6D3A3] cursor-pointer" />
                <span className="text-xs text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-xs text-[#E6D3A3]/70 hover:text-[#E6D3A3] transition-colors">
                Forgot password?
              </a>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-xs">
                ✓ Login successful! Redirecting...
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full btn-primary py-2.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <LogIn size={15} />
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-[#13141a] text-xs text-gray-600">Don't have an account?</span>
            </div>
          </div>
          <Link to="/signup" className="flex-1" >
          <a className="block w-full py-2.5 text-center text-sm font-medium text-[#E6D3A3]/70 border border-[#E6D3A3]/15 rounded-xl hover:border-[#E6D3A3]/35 hover:text-[#E6D3A3] transition-all duration-200">
            Create Account
          </a>
            </Link>
        </div>

        <p className="text-center text-xs text-gray-600 mt-5">
          By signing in, you agree to our Terms of Service
        </p>
      </div>
    </article>
  );
};

export default Login;
