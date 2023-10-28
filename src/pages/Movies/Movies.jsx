import { SearchForm } from 'components/atoms/SearchForm/SearchForm';
import { MovieList } from 'components/molecules/MovieList/MovieList';
import { useState, useEffect } from 'react';

import { fetchMoviesWithName } from 'services/fetchFromApi';

export const Movies = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [querry, setQuerry] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setQuerry(form.querry.value);
    form.reset();
  };

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetchMoviesWithName(querry, 1);
        setMoviesArray([...movies.results]);
      } catch (err) {
        console.log('Error: ', err.toString());
      }
    }
    getMovies();
  }, [querry]);
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {moviesArray.length > 0 && <MovieList movies={moviesArray} />}
    </>
  );
};
