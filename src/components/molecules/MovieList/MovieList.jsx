import { MovieCard } from 'components/atoms/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieCard key={movie.id} name={movie.title} />
      ))}
    </ul>
  );
};
