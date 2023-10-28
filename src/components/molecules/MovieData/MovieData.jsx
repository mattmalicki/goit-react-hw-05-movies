export const MovieData = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.poster} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <span>{movie.userScore}</span>
        <div>
          <p>Overview</p>
          <span>{movie.overview}</span>
        </div>
        <div>
          <p>Genres</p>
          <span>{movie.genres}</span>
        </div>
      </div>
    </div>
  );
};
