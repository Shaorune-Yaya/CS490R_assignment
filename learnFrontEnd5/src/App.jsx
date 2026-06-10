import './css/App.css'
import Home from './pages/Home';
import Favorates from './pages/Favorites';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />  
    <main className = "main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorates />} />
      </Routes>
    </main>
    </div>
  );
}

export default App
