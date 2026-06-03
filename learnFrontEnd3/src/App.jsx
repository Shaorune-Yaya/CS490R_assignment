import './App.css'
import Home from './pages/Home';
import Favorates from './pages/Favorites';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className = "main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorates />} />
      </Routes>
    </main>
  );
}

export default App
