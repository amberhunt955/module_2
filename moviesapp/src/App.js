import { useEffect, useState } from "react";

import { getMovie } from "./services/omdbapi";

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("Clueless");
      setMovie(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />

      <div className="content">
        <Form movieSearch={getMovie} setMovie={setMovie} />
        <MovieDisplay movie={movie} />
      </div>
    </div>
  );
}

export default App;
