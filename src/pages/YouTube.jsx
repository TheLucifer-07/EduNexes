import { useState } from "react";
import { Copy, Zap, PlayCircle, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const YouTube = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleAnalyze = async () => {
    if (!url.trim()) { setError("Please enter a YouTube URL"); return; }
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      setError("Please enter a valid YouTube URL"); return;
    }
    setLoading(true); setResult(""); setError("");
    try {
      const response = await fetch(`${API_URL}/api/youtube`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error?.includes("transcript")
          ? "❌ This video has no captions. Try another video."
          : data.error || "Failed to process video");
      } else if (data.result) setResult(data.result);
      else setError("No response from server");
    } catch (err) {
      setError("❌ Cannot connect to backend. Check if server is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="page-wrapper">
      <section className="max-w-4xl mx-auto section-card">

        {/* HEADER */}
        <div className="px-6 md:px-8 py-5 border-b border-[#E6D3A3]/10 flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] rounded-xl shadow-lg shadow-[#E6D3A3]/20">
            <PlayCircle size={18} className="text-black" />
          </div>
          <div>
            <h1 className="text-lg font-bold gold-gradient">YouTube AI</h1>
            <p className="text-xs text-gray-500 mt-0.5">Turn videos into notes & summaries</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6 space-y-4">

          {/* INPUT */}
          <div className="card p-5">
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-3 block">YouTube URL</label>
            <div className="flex flex-col md:flex-row gap-3">
              <input type="text" placeholder="Paste YouTube URL here..."
                value={url}
                onChange={(e) => { setUrl(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && !loading && handleAnalyze()}
                disabled={loading}
                className="input-field flex-1 disabled:opacity-50" />
              <button onClick={handleAnalyze} disabled={loading || !url.trim()}
                className="btn-primary flex items-center justify-center gap-2 px-6 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap">
                <Zap size={15} />
                {loading ? "Analyzing..." : "Analyze"}
              </button>
            </div>
            {error && (
              <div className="mt-3 flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <AlertCircle size={14} className="shrink-0" />
                {error}
              </div>
            )}
          </div>

          {/* OUTPUT */}
          <div className="card p-5 h-[380px] flex flex-col">
            {!result && !loading && !error && (
              <div className="flex flex-col items-center justify-center flex-1 text-gray-600 text-center">
                <PlayCircle size={36} className="opacity-20 mb-3" />
                <p className="text-sm">Paste a YouTube URL to get started</p>
              </div>
            )}
            {loading && (
              <div className="flex flex-col items-center justify-center flex-1 gap-3">
                <div className="spinner" />
                <p className="text-[#E6D3A3]/70 text-sm font-medium">Analyzing video...</p>
                <p className="text-gray-600 text-xs">This may take 10–30 seconds</p>
              </div>
            )}
            {result && !loading && (
              <>
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-[#E6D3A3]/10">
                  <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap size={12} /> AI Output
                  </p>
                  <button onClick={handleCopy} className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5">
                    <Copy size={12} /> {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto pr-1">
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-mono">
                    {result}
                  </pre>
                </div>
              </>
            )}
          </div>

        </div>
      </section>
    </article>
  );
};

export default YouTube;
