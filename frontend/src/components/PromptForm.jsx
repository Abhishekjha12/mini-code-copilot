import { useState } from "react";

export default function PromptForm({ setOutput, setLanguage, addToHistory, prompt, setPrompt }) {
  const [type, setType] = useState("javascript");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setOutput("// Generating...");

    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type }),
      });
      const data = await res.json();
      setOutput(data.code);
      addToHistory(prompt, data.code, type);
    } catch {
      setOutput("// Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}
      className="bg-blue/70 backdrop-blur-xl rounded-2xl border border-pink-200 shadow-md p-5 space-y-4">
      
      <textarea
        rows="3"
        placeholder="Describe what you want the code to do..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-3 bg-white border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-pink-400"
      />

      <div className="flex gap-4 items-center">
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setLanguage(e.target.value);
          }}
          className="flex-1 bg-pink border border-gray-300 rounded-xl px-3 py-2"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white px-6 py-2 rounded-xl font-medium active:scale-95 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
    </form>
  );
}
