import styles from './MovieData.module.css';

export const MovieData = ({ movie }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Image}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          width="100%"
          alt={movie.title}
        />
      </div>
      <div className={styles.Info}>
        <div className={styles.Div}>
          <h2 className={styles.Title}>{movie.title}</h2>
          <span className={styles.Average}>{movie.vote_average}</span>
        </div>
        <div className={styles.Div}>
          <p className={styles.Key}>Overview</p>
          <span className={styles.Value}>{movie.overview}</span>
        </div>
        <div className={styles.Div}>
          <p className={styles.Key}>Genres</p>
          <span className={styles.Value}>
            {console.log(movie)}
            {movie.genres && movie.genres.map(obj => obj.name).join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};
