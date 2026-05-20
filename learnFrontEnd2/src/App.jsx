import './App.css'
import MovieCard from './components/MovieCard';
function App() {
  return (
    <>
      <MovieCard movie = {{title: "Tim's Film", release_date: "2026-01-01"}} />
      <MovieCard movie = {{title: "Joe's Film 2", release_date: "2025-01-01"}} />

    </>
  );
}


export default App
