import { MovieCard } from 'components/organisms/MovieInfo/MovieInfo';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieCard name={movie.name} />
      ))}
    </ul>
  );
};
