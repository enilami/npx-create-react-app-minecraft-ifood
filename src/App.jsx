// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import EditarQuiz from "./components/EditarQuiz";
import DetalhesQuiz from "./components/DetalhesQuiz";
import JogarQuiz from "./components/JogarQuiz";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="bg-green-700 min-h-screen font-mono text-white p-4">
        <Routes>
          <Route
            path="/"
            element={!user ? <Cadastro onLogin={setUser} /> : <Home user={user} />}
          />
          <Route path="/editar/:id" element={<EditarQuiz />} />
          <Route path="/quiz/:id" element={<DetalhesQuiz />} />
          <Route path="/jogar/:id" element={<JogarQuiz user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}
