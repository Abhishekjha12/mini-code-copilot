import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function OutputBox({ output, language }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-pink-200 shadow-md p-5 h-[520px] flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-700">Generated Code</h2>
        <button
          onClick={() => output && navigator.clipboard.writeText(output)}
          className="text-sm text-pink-600 hover:underline"
        >
          Copy
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <SyntaxHighlighter language={language} style={oneDark}>
          {output || "// Code will appear here..."}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
