import { Link, useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import { MovieCard } from 'components/atoms/MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const pathFrom = location.pathname === '/' ? 'movies/' : '';
  return (
    <ul>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`${pathFrom}${movie.id}`}
          state={{ from: location }}
        >
          <MovieCard name={movie.title} />
        </Link>
      ))}
    </ul>
  );
};
