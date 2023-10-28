export const MovieData = ({ movie }) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          width="100%"
          alt={movie.title}
        />
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
          <span>{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};
