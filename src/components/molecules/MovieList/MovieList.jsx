import { MovieCard } from 'components/atoms/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieCard name={movie.name} />
      ))}
    </ul>
  );
};
