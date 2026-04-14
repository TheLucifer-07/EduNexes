import { useState } from "react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";
import { Download, Copy, BookOpen, Zap } from "lucide-react";
import Reveal from "../components/Reveal";

const API_URL = import.meta.env.VITE_API_URL;

const Notes = () => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("Short");
  const [format, setFormat] = useState("Bullet");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generateNotes = async () => {
    if (!subject.trim() || !topic.trim()) return;
    setLoading(true);
    setNotes("");
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject: subject.trim(), topic: topic.trim(), type, format }),
      });
      const data = await response.json();
      if (!response.ok) setError(data.error || "Failed to generate notes");
      else if (data.result) setNotes(data.result);
      else setError("No response from server");
    } catch (err) {
      setError(`❌ Cannot connect to backend. Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyNotes = () => {
    navigator.clipboard.writeText(notes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadNotes = () => {
    const pdf = new jsPDF();
    const margin = 15;
    const maxWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    const cleanText = notes.replace(/#{1,6}\s/g, "").replace(/\*\*/g, "").replace(/\*/g, "").replace(/`/g, "");
    const lines = pdf.splitTextToSize(cleanText, maxWidth);
    let y = margin;
    pdf.setFontSize(12);
    lines.forEach((line) => {
      if (y + 10 > pdf.internal.pageSize.getHeight() - margin) { pdf.addPage(); y = margin; }
      pdf.text(line, margin, y);
      y += 7;
    });
    pdf.save(`${subject}-${topic}-notes.pdf`);
  };

  return (
    <article className="page-wrapper">
      <Reveal variant="fade-up" className="max-w-5xl mx-auto">
      <section className="section-card motion-panel">

        {/* HEADER */}
        <div className="px-6 md:px-8 py-5 border-b border-[#E6D3A3]/10 flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-[#E6D3A3] to-[#C8A96E] rounded-xl shadow-lg shadow-[#E6D3A3]/20">
            <BookOpen size={18} className="text-black" />
          </div>
          <div>
            <h1 className="text-lg font-bold gold-gradient">AI Notes Generator</h1>
            <p className="text-xs text-gray-500 mt-0.5">Generate structured notes in seconds</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6">
          <div className="grid md:grid-cols-2 gap-5">

            {/* LEFT — INPUT */}
            <Reveal variant="flip-up">
            <div className="card p-5 flex flex-col h-[550px] motion-panel-soft">
              <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Zap size={12} /> Create Notes
              </p>

              <div className="mb-3">
                <label className="text-xs text-gray-500 mb-1.5 block">Subject</label>
                <input type="text" placeholder="e.g., Data Structures" value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="input-field" />
              </div>

              <div className="mb-3">
                <label className="text-xs text-gray-500 mb-1.5 block">Topic</label>
                <input type="text" placeholder="e.g., Binary Trees" value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && generateNotes()}
                  className="input-field" />
              </div>

              <div className="mb-3">
                <label className="text-xs text-gray-500 mb-1.5 block">Note Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="input-field cursor-pointer">
                  <option value="Short">Short Notes</option>
                  <option value="Detailed">Detailed Notes</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-500 mb-1.5 block">Format</label>
                <select value={format} onChange={(e) => setFormat(e.target.value)} className="input-field cursor-pointer">
                  <option value="Bullet">Bullet Points</option>
                  <option value="Paragraph">Paragraph</option>
                </select>
              </div>

              <button onClick={generateNotes} disabled={loading || !subject.trim() || !topic.trim()}
                className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  loading || !subject.trim() || !topic.trim()
                    ? "bg-white/5 text-gray-600 cursor-not-allowed"
                    : "btn-primary"
                }`}>
                <Zap size={15} />
                {loading ? "Generating..." : "Generate Notes"}
              </button>

              {error && (
                <div className="mt-3 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                  {error}
                </div>
              )}
            </div>
            </Reveal>

            {/* RIGHT — OUTPUT */}
            <Reveal variant="flip-down" delay={120}>
            <div className="card p-5 flex flex-col h-[550px] motion-panel-soft">
              <p className="text-xs font-semibold text-[#E6D3A3]/60 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <BookOpen size={12} /> Generated Notes
              </p>

              <div className="flex-1 overflow-y-auto pr-1">
                {!notes && !loading && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-600 text-center">
                    <BookOpen size={36} className="opacity-20 mb-3" />
                    <p className="text-sm">Enter subject & topic to generate notes</p>
                  </div>
                )}
                {loading && (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <div className="spinner" />
                    <p className="text-[#E6D3A3]/70 text-sm font-medium">Generating AI Notes...</p>
                    <p className="text-gray-600 text-xs">This may take 10–20 seconds</p>
                  </div>
                )}
                {notes && !loading && (
                  <div className="prose prose-invert prose-sm max-w-none prose-gold">
                    <ReactMarkdown>{notes}</ReactMarkdown>
                  </div>
                )}
              </div>

              {notes && !loading && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-[#E6D3A3]/10">
                  <button onClick={copyNotes}
                    className="flex-1 btn-outline text-xs py-2 flex items-center justify-center gap-1.5">
                    <Copy size={13} /> {copied ? "Copied!" : "Copy"}
                  </button>
                  <button onClick={downloadNotes}
                    className="flex-1 btn-primary text-xs py-2 flex items-center justify-center gap-1.5">
                    <Download size={13} /> Download PDF
                  </button>
                </div>
              )}
            </div>
            </Reveal>

          </div>
        </div>
      </section>
      </Reveal>
    </article>
  );
};

export default Notes;
