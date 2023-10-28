import { useEffect, useState, useRef } from 'react';

import { MovieList } from 'components/molecules/MovieList/MovieList';

import { fetchTrendingMovies } from 'services/fetchFromApi';

export const Trending = () => {
  const moviesArray = useRef([]);

  const array = [
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
  ];

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchTrendingMovies();
        moviesArray.current = movies.result;
      } catch (err) {
        console.log('Error: ', err.toString());
      }
    }
    getMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={array} />
    </>
  );
};
