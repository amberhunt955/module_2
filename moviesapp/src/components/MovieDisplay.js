import { Image } from "react-bootstrap";

function MovieDisplay({ movie }) {
  const loaded = () => {
    if (movie.Error) {
      return <h1>Movie not found...</h1>;
    }

    return (
      <div className="movie-display">
        <h1>
          {movie.Title}, {movie.Year}
        </h1>

        <div id="container">
            <Image rounded src={movie.Poster} alt={movie.Title} />
            <p>{movie.Plot}</p>
        </div>
      </div>
    );
  };

  const loading = () => <h1>No Movie to Display</h1>;

  return movie ? loaded() : loading();
}

export default MovieDisplay;
