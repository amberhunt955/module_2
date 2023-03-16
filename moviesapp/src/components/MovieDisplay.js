function MovieDisplay(props) {
  const { movie } = props;
  console.log(movie);

  return (
    <div className="movie-display">
      <h1>
        {movie.Title}, {movie.Year}
      </h1>
      <div id="container">
        <img src={movie.Poster} alt="movie poster" />
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieDisplay;
