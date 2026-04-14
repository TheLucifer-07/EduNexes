import { useState } from "react";
import { Upload, FileText, X, Briefcase, CheckCircle, Copy, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const Resume = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!file || !role) return;
    setLoading(true); setResult(""); setError("");
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const base64 = e.target.result.split(",")[1];
          const response = await fetch(`${API_URL}/api/resume`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pdfBase64: base64, role }),
          });
          const data = await response.json();
          if (!response.ok) setError(data.error || "Failed to analyze resume");
          else if (data.result) setResult(data.result);
          else setError("No response from server");
        } catch (err) {
          setError("❌ Cannot connect to backend. Check if server is running.");
          console.error(err);
        } finally { setLoading(false); }
      };
      reader.onerror = () => { setError("Failed to read PDF file"); setLoading(false); };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Failed to process file");
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <article className="page-wrapper">
      <section className="max-w-5xl mx-auto section-card">

        {/* HEADER */}
        <div className="px-6 md:px-8 py-5 border-b border-[#E6D3A3]/10 flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] rounded-xl shadow-lg shadow-[#E6D3A3]/20">
            <Briefcase size={18} className="text-black" />
          </div>
          <div>
            <h1 className="text-lg font-bold gold-gradient">Resume Analyzer</h1>
            <p className="text-xs text-gray-500 mt-0.5">Get AI-powered insights for your resume</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6">
          <div className="grid md:grid-cols-2 gap-5">

            {/* LEFT — UPLOAD */}
            <div className="card p-5 flex flex-col h-[480px] overflow-y-auto">
              <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Upload size={12} /> Upload Resume
              </p>

              <div className="mb-4">
                <label className="text-xs text-gray-500 mb-1.5 flex items-center gap-1.5 block">
                  <Briefcase size={11} /> Target Role
                </label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field cursor-pointer">
                  <option value="">Select a role...</option>
                  <option>Software Engineer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>Data Scientist</option>
                  <option>Data Analyst</option>
                  <option>DevOps Engineer</option>
                  <option>Product Manager</option>
                  <option>UI/UX Designer</option>
                  <option>Mobile Developer</option>
                  <option>Machine Learning Engineer</option>
                  <option>Cloud Architect</option>
                </select>
              </div>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#E6D3A3]/15 rounded-2xl p-6 cursor-pointer hover:border-[#E6D3A3]/35 hover:bg-[#E6D3A3]/3 transition-all duration-300 group mb-4">
                <Upload size={28} className="text-[#E6D3A3]/30 group-hover:text-[#E6D3A3]/60 mb-2 transition-all" />
                <p className="text-gray-500 text-sm">{file ? "Replace file" : "Drag & drop PDF here"}</p>
                <p className="text-gray-600 text-xs mt-1">or click to browse</p>
                <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="hidden" />
              </label>

              {file && (
                <div className="flex items-center justify-between bg-[#E6D3A3]/5 border border-[#E6D3A3]/15 p-3 rounded-xl mb-4">
                  <div className="flex items-center gap-2 text-sm min-w-0">
                    <FileText size={16} className="text-[#E6D3A3] shrink-0" />
                    <div className="min-w-0">
                      <p className="text-white text-xs truncate">{file.name}</p>
                      <p className="text-gray-500 text-xs">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button onClick={() => setFile(null)} className="text-gray-500 hover:text-red-400 p-1 rounded-lg transition-colors shrink-0">
                    <X size={15} />
                  </button>
                </div>
              )}

              <button onClick={handleAnalyze} disabled={!file || !role || loading}
                className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  !file || !role || loading ? "bg-white/5 text-gray-600 cursor-not-allowed" : "btn-primary"
                }`}>
                <CheckCircle size={15} />
                {loading ? "Analyzing..." : "Analyze Resume"}
              </button>

              {error && (
                <div className="mt-3 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex items-center gap-2">
                  <AlertCircle size={13} className="shrink-0" /> {error}
                </div>
              )}
            </div>

            {/* RIGHT — OUTPUT */}
            <div className="card p-5 flex flex-col h-[480px]">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest flex items-center gap-1.5">
                  <FileText size={12} /> AI Feedback
                </p>
                {result && (
                  <button onClick={() => navigator.clipboard.writeText(result)}
                    className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5">
                    <Copy size={12} /> Copy
                  </button>
                )}
              </div>

              <div className="flex-1 overflow-y-auto pr-1">
                {!result && !loading && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-600 text-center">
                    <FileText size={36} className="opacity-20 mb-3" />
                    <p className="text-sm">Upload a resume to get started</p>
                  </div>
                )}
                {loading && (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <div className="spinner" />
                    <p className="text-[#E6D3A3]/70 text-sm font-medium">Analyzing your resume...</p>
                    <p className="text-gray-600 text-xs">This may take 20–40 seconds</p>
                  </div>
                )}
                {result && !loading && (
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-mono">
                    {result}
                  </pre>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
};

export default Resume;
