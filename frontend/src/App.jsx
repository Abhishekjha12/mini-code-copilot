import { useState, useEffect } from "react";
import Header from "./components/Header";
import PromptForm from "./components/PromptForm";
import OutputBox from "./components/OutputBox";
import HistoryPanel from "./components/HistoryPanel";

export default function App() {
  const [output, setOutput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("mini_history");
    return saved ? JSON.parse(saved) : [];
  });

  const addToHistory = (prompt, code, language) => {
    const entry = { prompt, code, language, timestamp: Date.now() };
    setHistory((prev) => [entry, ...prev]);
  };

  useEffect(() => {
    localStorage.setItem("mini_history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#fff9fc] via-[#fef7ff] to-[#fff5f9] text-gray-900">
      <Header />

      <div className="max-w-6xl mx-auto mt-12 flex gap-8">
        <div className="w-64 shrink-0">
          <HistoryPanel
            history={history}
            setOutput={setOutput}
            setPrompt={setPrompt}
            setLanguage={setLanguage}
          />
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <PromptForm
            setOutput={setOutput}
            setLanguage={setLanguage}
            addToHistory={addToHistory}
            prompt={prompt}
            setPrompt={setPrompt}
          />
          <OutputBox output={output} language={language} />
        </div>
      </div>
    </div>
  );
}
