import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Plus, Trash2, CheckCircle2, Circle, Flag, Trophy, Flame, Target,
  Clock, Calendar, Pencil, X, Check, AlertCircle, Loader2
} from "lucide-react";
import Reveal from "../components/Reveal";

const PRIORITY = {
  High:   { color: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/30"    },
  Medium: { color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  Low:    { color: "text-green-400",  bg: "bg-green-400/10",  border: "border-green-400/30"  },
};

const STATUS = {
  todo:          { label: "To Do",       color: "text-gray-400",  bg: "bg-gray-400/10",  border: "border-gray-400/30",  barBg: "bg-gray-400"  },
  "in-progress": { label: "In Progress", color: "text-blue-400",  bg: "bg-blue-400/10",  border: "border-blue-400/30",  barBg: "bg-blue-400"  },
  completed:     { label: "Completed",   color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30", barBg: "bg-green-400" },
};

const API_URL = import.meta.env.VITE_API_URL;

const isOverdue = (dueDate, status) => {
  if (!dueDate || status === "completed") return false;
  return new Date(dueDate) < new Date(new Date().toDateString());
};

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const Home = () => {
  const [user] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });
  const [streak, setStreak] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? (JSON.parse(u).streak || 0) : 0;
  });

  const [tasks, setTasks]       = useState([]);
  const [loading, setLoading]   = useState(() => Boolean(user));
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority]   = useState("Medium");
  const [dueDate, setDueDate]     = useState("");
  const [filter, setFilter]       = useState("all");
  const [editId, setEditId]       = useState(null);
  const [editText, setEditText]   = useState("");
  const editRef = useRef(null);

  // Fetch tasks from MongoDB on mount
  useEffect(() => {
    if (!user) return;
    fetch(`${API_URL}/api/tasks`, { headers: authHeaders() })
      .then((r) => r.json())
      .then((data) => setTasks(data.tasks || []))
      .catch((e) => console.error("Fetch tasks failed", e))
      .finally(() => setLoading(false));
  }, [user]);

  // Focus edit input
  useEffect(() => {
    if (editId && editRef.current) editRef.current.focus();
  }, [editId]);

  const addTask = async () => {
    if (!taskInput.trim()) return;
    const body = { text: taskInput.trim(), priority, dueDate: dueDate || null, date: new Date().toDateString() };
    setTaskInput(""); setDueDate("");
    try {
      const res = await fetch(`${API_URL}/api/tasks`, { method: "POST", headers: authHeaders(), body: JSON.stringify(body) });
      const data = await res.json();
      if (data.task) setTasks((prev) => [data.task, ...prev]);
    } catch (e) { console.error("Add task failed", e); }
  };

  const cycleStatus = async (task) => {
    const order = ["todo", "in-progress", "completed"];
    const next = order[(order.indexOf(task.status) + 1) % order.length];
    // optimistic update
    setTasks((prev) => prev.map((t) => t._id === task._id ? { ...t, status: next } : t));
    try {
      await fetch(`${API_URL}/api/tasks/${task._id}`, { method: "PATCH", headers: authHeaders(), body: JSON.stringify({ status: next }) });
      // update streak if completed
      if (next === "completed") {
        const res = await fetch(`${API_URL}/api/task/complete`, { method: "PATCH", headers: authHeaders() });
        const data = await res.json();
        if (data.streak !== undefined) {
          setStreak(data.streak);
          const u = JSON.parse(localStorage.getItem("user") || "{}");
          localStorage.setItem("user", JSON.stringify({ ...u, streak: data.streak, lastCompletedDate: data.lastCompletedDate }));
        }
      }
    } catch (e) { console.error("Update task failed", e); }
  };

  const deleteTask = async (id) => {
    setTasks((prev) => prev.filter((t) => t._id !== id));
    try {
      await fetch(`${API_URL}/api/tasks/${id}`, { method: "DELETE", headers: authHeaders() });
    } catch (e) { console.error("Delete task failed", e); }
  };

  const saveEdit = async (id) => {
    if (!editText.trim()) return;
    setTasks((prev) => prev.map((t) => t._id === id ? { ...t, text: editText.trim() } : t));
    setEditId(null);
    try {
      await fetch(`${API_URL}/api/tasks/${id}`, { method: "PATCH", headers: authHeaders(), body: JSON.stringify({ text: editText.trim() }) });
    } catch (e) { console.error("Edit task failed", e); }
  };

  const completed     = tasks.filter((t) => t.status === "completed").length;
  const total         = tasks.length;
  const percent       = total ? Math.round((completed / total) * 100) : 0;
  const circumference = 2 * Math.PI * 36;
  const overdueCount  = tasks.filter((t) => isOverdue(t.dueDate, t.status)).length;

  const filtered = tasks.filter((t) => {
    if (filter === "all")     return true;
    if (filter === "overdue") return isOverdue(t.dueDate, t.status);
    return t.status === filter;
  });

  return (
    <div className="text-white min-h-screen px-6 md:px-16 py-10 mt-14">

      {user ? (
        <Reveal variant="fade-up" className="text-center max-w-4xl mx-auto mt-10">
          <p className="text-[#E6D3A3]/60 text-sm font-medium tracking-widest uppercase mb-3">Welcome back</p>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#E6D3A3] to-[#D4AF8D] bg-clip-text text-transparent">
            {user.name} 👋
          </h1>
          <p className="mt-4 text-gray-400 text-lg">Ready to continue learning? Pick up where you left off.</p>
        </Reveal>
      ) : (
        <Reveal variant="fade-up" className="text-center max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E6D3A3]">Welcome to EduNexes 🚀</h1>
          <p className="mt-6 text-gray-400 text-lg">Your AI-powered student operating system to learn faster, smarter, and better.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/chat"><button className="bg-[#E6D3A3] text-black px-6 py-2 rounded-md hover:opacity-80 transition">Start Learning</button></Link>
            <Link to="/notes"><button className="border border-[#E6D3A3]/40 px-6 py-2 rounded-md hover:bg-[#E6D3A3] hover:text-black transition">Generate Notes</button></Link>
          </div>
        </Reveal>
      )}

      {/* FEATURES */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <FeatureCard title="AI Chat"         desc="Ask anything and learn instantly"   link="/chat" delay={0}   />
        <FeatureCard title="Notes Generator" desc="Turn topics into structured notes"  link="/notes" delay={120} />
        <FeatureCard title="Resume Analyzer" desc="Improve your resume with AI"        link="/resume" delay={240} />
      </div>

      {/* PROGRESS + TASK MANAGER — only when logged in */}
      {user && (
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* PROGRESS TRACKER */}
          <Reveal variant="flip-up">
          <div className="bg-[#161B22]/90 border border-[#E6D3A3]/10 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Target size={20} className="text-[#E6D3A3]" />
              <h2 className="text-lg font-bold text-[#E6D3A3]">Progress Tracker</h2>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Overall Progress</span>
                <span className="text-[#E6D3A3] font-semibold">{percent}%</span>
              </div>
              <div className="w-full h-3 bg-[#0D1117] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#E6D3A3] to-[#D4AF8D] rounded-full transition-all duration-700" style={{ width: `${percent}%` }} />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="#E6D3A3" strokeOpacity="0.1" strokeWidth="7" />
                  <circle cx="40" cy="40" r="36" fill="none" stroke="#E6D3A3" strokeWidth="7" strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (circumference * percent) / 100}
                    className="transition-all duration-700" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-[#E6D3A3]">{percent}%</span>
                  <span className="text-xs text-gray-400">done</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#0D1117] rounded-xl p-3 text-center border border-[#E6D3A3]/10">
                <p className="text-xl font-bold text-[#E6D3A3]">{total}</p>
                <p className="text-xs text-gray-400 mt-1">Total</p>
              </div>
              <div className="bg-[#0D1117] rounded-xl p-3 text-center border border-green-400/20">
                <p className="text-xl font-bold text-green-400">{completed}</p>
                <p className="text-xs text-gray-400 mt-1">Done</p>
              </div>
              <div className="bg-[#0D1117] rounded-xl p-3 text-center border border-yellow-400/20">
                <p className="text-xl font-bold text-yellow-400">{total - completed}</p>
                <p className="text-xs text-gray-400 mt-1">Left</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {Object.entries(STATUS).map(([key, s]) => {
                const count = tasks.filter((t) => t.status === key).length;
                const pct   = total ? Math.round((count / total) * 100) : 0;
                return (
                  <div key={key} className="flex items-center gap-3">
                    <span className={`text-xs w-20 shrink-0 ${s.color}`}>{s.label}</span>
                    <div className="flex-1 h-1.5 bg-[#0D1117] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${s.barBg}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 w-6 text-right">{count}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 bg-[#0D1117] rounded-xl p-4 border border-[#E6D3A3]/10">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Flame size={20} className="text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{streak} day streak</p>
                <p className="text-xs text-gray-400">Complete tasks daily to grow it!</p>
              </div>
              {streak >= 3 && (
                <div className="ml-auto p-2 bg-yellow-400/10 rounded-lg">
                  <Trophy size={18} className="text-yellow-400" />
                </div>
              )}
            </div>
          </div>
          </Reveal>

          {/* TASK MANAGER */}
          <Reveal variant="flip-down" delay={120}>
          <div className="bg-[#161B22]/90 border border-[#E6D3A3]/10 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#E6D3A3]" />
                <h2 className="text-lg font-bold text-[#E6D3A3]">Task Manager</h2>
              </div>
              {overdueCount > 0 && (
                <span className="flex items-center gap-1 text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-1 rounded-full">
                  <AlertCircle size={11} /> {overdueCount} overdue
                </span>
              )}
            </div>

            {/* Add Task */}
            <div className="flex flex-col gap-2">
              <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                placeholder="Add a new task..."
                className="w-full px-4 py-2.5 bg-[#0D1117] border border-[#E6D3A3]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E6D3A3]/50 transition text-sm" />
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <Calendar size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}
                    className="w-full pl-7 pr-2 py-1.5 bg-[#0D1117] border border-[#E6D3A3]/20 rounded-lg text-gray-400 text-xs focus:outline-none focus:border-[#E6D3A3]/40 transition" />
                </div>
                {Object.keys(PRIORITY).map((p) => (
                  <button key={p} onClick={() => setPriority(p)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                      priority === p ? `${PRIORITY[p].bg} ${PRIORITY[p].border} ${PRIORITY[p].color}` : "bg-transparent border-[#E6D3A3]/10 text-gray-500 hover:border-[#E6D3A3]/30"
                    }`}>{p}</button>
                ))}
                <button onClick={addTask} className="px-3 py-1.5 bg-[#E6D3A3] text-black rounded-lg text-xs font-bold hover:bg-[#D4AF8D] transition flex items-center gap-1 shrink-0">
                  <Plus size={13} /> Add
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1.5 flex-wrap">
              {[
                { key: "all",         label: "All",         count: tasks.length },
                { key: "todo",        label: "To Do",       count: tasks.filter(t => t.status === "todo").length },
                { key: "in-progress", label: "In Progress", count: tasks.filter(t => t.status === "in-progress").length },
                { key: "completed",   label: "Done",        count: completed },
                { key: "overdue",     label: "Overdue",     count: overdueCount },
              ].map(({ key, label, count }) => (
                <button key={key} onClick={() => setFilter(key)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                    filter === key
                      ? key === "overdue" ? "bg-red-400/10 border-red-400/30 text-red-400" : "bg-[#E6D3A3]/10 border-[#E6D3A3]/30 text-[#E6D3A3]"
                      : "bg-transparent border-[#E6D3A3]/10 text-gray-500 hover:border-[#E6D3A3]/20"
                  }`}>
                  {label} {count > 0 && <span className="ml-1 opacity-70">{count}</span>}
                </button>
              ))}
            </div>

            {/* Task List */}
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
              {loading && (
                <div className="flex items-center justify-center py-8 gap-2 text-gray-500">
                  <Loader2 size={16} className="animate-spin" /> Loading tasks...
                </div>
              )}
              {!loading && filtered.length === 0 && (
                <p className="text-center text-gray-500 text-sm py-8">
                  {filter === "overdue" ? "No overdue tasks 🎉" : "No tasks here. Add one above ☝️"}
                </p>
              )}
              {!loading && filtered.map((task) => {
                const overdue = isOverdue(task.dueDate, task.status);
                const s = STATUS[task.status] || STATUS["todo"];
                return (
                  <div key={task._id} className={`flex items-start gap-3 p-3 rounded-xl border transition group ${
                    task.status === "completed" ? "bg-[#0D1117]/50 border-[#E6D3A3]/5 opacity-60"
                    : overdue ? "bg-red-500/5 border-red-400/20 hover:border-red-400/40"
                    : "bg-[#0D1117] border-[#E6D3A3]/10 hover:border-[#E6D3A3]/25"
                  }`}>
                    <button onClick={() => cycleStatus(task)} className="shrink-0 mt-0.5" title="Click to cycle status">
                      {task.status === "completed" ? <CheckCircle2 size={18} className="text-green-400" />
                        : task.status === "in-progress" ? <Clock size={18} className="text-blue-400" />
                        : <Circle size={18} className="text-gray-500 hover:text-[#E6D3A3] transition" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      {editId === task._id ? (
                        <div className="flex gap-1">
                          <input ref={editRef} value={editText} onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter") saveEdit(task._id); if (e.key === "Escape") setEditId(null); }}
                            className="flex-1 bg-[#1a1a1a] border border-[#E6D3A3]/30 rounded-lg px-2 py-0.5 text-sm text-white focus:outline-none" />
                          <button onClick={() => saveEdit(task._id)} className="text-green-400 hover:text-green-300"><Check size={14} /></button>
                          <button onClick={() => setEditId(null)} className="text-gray-500 hover:text-gray-300"><X size={14} /></button>
                        </div>
                      ) : (
                        <span className={`text-sm block truncate ${task.status === "completed" ? "line-through text-gray-500" : "text-white"}`}>
                          {task.text}
                        </span>
                      )}
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${s.bg} ${s.border} ${s.color}`}>{s.label}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full border ${(PRIORITY[task.priority] || PRIORITY["Medium"]).bg} ${(PRIORITY[task.priority] || PRIORITY["Medium"]).border} ${(PRIORITY[task.priority] || PRIORITY["Medium"]).color}`}>
                          <Flag size={9} className="inline mr-0.5" />{task.priority}
                        </span>
                        {task.dueDate && (
                          <span className={`text-xs flex items-center gap-0.5 ${overdue ? "text-red-400" : "text-gray-500"}`}>
                            <Calendar size={10} />
                            {overdue && <AlertCircle size={10} />}
                            {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition mt-0.5">
                      <button onClick={() => { setEditId(task._id); setEditText(task.text); }} className="text-gray-500 hover:text-[#E6D3A3] transition">
                        <Pencil size={13} />
                      </button>
                      <button onClick={() => deleteTask(task._id)} className="text-gray-500 hover:text-red-400 transition">
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </Reveal>
        </div>
      )}

      {/* TECH STACK TAGS */}
      <Reveal variant="zoom-in" className="mt-16 text-center">
        <h2 className="text-2xl text-[#E6D3A3] mb-6">Powered By</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Tailwind", "Node.js", "MongoDB", "GeminiAPI"].map((tech) => (
            <span key={tech} className="px-4 py-1 rounded-full bg-[#161B22] border border-[#E6D3A3]/20 text-sm hover:bg-[#E6D3A3] hover:text-black transition">
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      {/* QUICK ACTIONS */}
      <Reveal variant="zoom-out" className="mt-20 text-center">
        <h2 className="text-2xl text-[#E6D3A3] mb-6">Quick Actions</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/chat"    className="action-btn">Start Chat</Link>
          <Link to="/notes"   className="action-btn">Create Notes</Link>
          <Link to="/resume"  className="action-btn">Review Resume</Link>
        </div>
      </Reveal>

    </div>
  );
};

const FeatureCard = ({ title, desc, link, delay = 0 }) => (
  <Reveal variant="fade-up" delay={delay}>
  <Link to={link}>
    <div className="bg-[#161B22]/85 p-6 rounded-xl border border-[#E6D3A3]/10 hover:border-[#E6D3A3]/40 hover:scale-105 transition cursor-pointer backdrop-blur-sm">
      <h3 className="text-xl text-[#E6D3A3]">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </div>
  </Link>
  </Reveal>
);

export default Home;
