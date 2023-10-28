import { useEffect, useState } from 'react';

import { MovieList } from 'components/molecules/MovieList/MovieList';

import { fetchTrendingMovies } from 'services/fetchFromApi';

export const Trending = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingMovies(1);
        setMoviesArray([...movies.results]);
      } catch (err) {
        console.log('Error: ', err.toString());
      }
    }
    getMovies();
  }, []);
  // useEffect(() => {}, [moviesArray]);
  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={moviesArray} />
    </>
  );
};
