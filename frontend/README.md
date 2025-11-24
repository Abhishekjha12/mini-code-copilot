# Mini Code Copilot

A lightweight web app where users can enter natural language prompts and get mock code suggestions, similar to a tiny code assistant.

## Tech Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express (mock API)
- Syntax Highlighting: `react-syntax-highlighter`

---

## Features

- Prompt input with language selector (JavaScript / Python / C++)
- Generate button with loading state
- Mock backend `/generate` endpoint
- Syntax-highlighted code output
- Copy-to-clipboard for generated code

---

## Project Structure

```bash
miniCodeCopilot/
  ├─ backend/
  │   ├─ server.js
  │   └─ package.json
  └─ frontend/
      ├─ src/
      │   ├─ App.jsx
      │   ├─ index.css
      │   └─ components/
      │       ├─ Header.jsx
      │       ├─ PromptForm.jsx
      │       └─ OutputBox.jsx
      ├─ package.json
      └─ vite.config.js
Getting Started
1. Backend
bash
Copy code
cd backend
npm install
node server.js
# Backend runs at http://localhost:5000
2. Frontend
bash
Copy code
cd frontend
npm install
npm run dev
# App runs at http://localhost:5173
API
POST /generate
Request body:

json
Copy code
{
  "prompt": "Write a function to reverse a string",
  "type": "javascript"
}
Response:

json
Copy code
{
  "code": "// Generated javascript code\nconsole.log(\"Prompt: Write a function to reverse a string\")"
}
Design & Architecture Notes
Kept frontend and backend in separate folders for clarity.

Backend is intentionally a mock so it’s easy to swap in a real AI provider later.

Frontend is split into small, reusable components for readability:

PromptForm handles state + API calls

OutputBox only focuses on rendering code + copying

Header keeps layout clean

If I Had More Time
Add prompt history with localStorage (search, filter, favourite).

Add dark/light theme toggle.

Support more languages and different syntax highlighting themes.

Add validation (max prompt length, error messages).

Connect to a real LLM API for actual code generation.

markdown
Copy code

---

## 3️⃣ Simple next steps for you

You now have:

- ✅ Working UI  
- ✅ Working backend  
- ✅ Tailwind + syntax highlight  
- ✅ Generate + copy flow  

You can now:

1. **Push to GitHub**  
   - `git init`, `git add .`, `git commit -m "Mini Code Copilot MVP"`

2. **Deploy frontend (Netlify / Vercel)**  
   - Build command: `npm run build`  
   - Output directory: `dist`

3. **Deploy backend (Render / Railway)**  
   - Point to `backend/server.js`  
   - Set `PORT` env if needed and use `process.env.PORT || 5000` 