import { Link } from 'react-router-dom';

import { MovieCard } from 'components/atoms/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          <MovieCard name={movie.title} />
        </Link>
      ))}
    </ul>
  );
};
