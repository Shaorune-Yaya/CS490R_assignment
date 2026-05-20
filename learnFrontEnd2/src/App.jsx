import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1;

  return (
    <>{/*One way to do conditional rendering*/}
      {/* {movieNumber === 1 ? (
        <MovieCard movie = {{title: "Tim's Film", release_date: "2026-01-01"}} />
      ) : (
        <MovieCard movie = {{title: "Joe's Film 2", release_date: "2025-01-01"}} />
      )} */}
      {/*second way to do conditional rendering*/}
      {movieNumber === 1 && <MovieCard movie = {{title: "Tim's Film", release_date: "2026-01-01"}} />}
      {movieNumber === 2 && <MovieCard movie = {{title: "Joe's Film 2", release_date: "2025-01-01"}} />}
    </>
  );
}


export default App
