export default function HistoryPanel({ history, setOutput, setPrompt, setLanguage }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-pink-200 shadow-md p-5 h-[520px] overflow-y-auto">
      <h2 className="font-semibold text-gray-700 mb-4 text-lg">History</h2>

      {history.length === 0 && (
        <p className="text-gray-400 text-sm">No history yet</p>
      )}

      <ul className="space-y-3">
        {history.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setPrompt(item.prompt);
              setOutput(item.code);
              setLanguage(item.language);
            }}
            className="p-3 cursor-pointer rounded-xl bg-white border border-pink-100 hover:border-pink-400 shadow-sm"
          >
            <p className="font-medium text-sm text-gray-800">{item.prompt}</p>
            <p className="text-xs text-pink-500 mt-1">{item.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
