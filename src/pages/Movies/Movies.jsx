import { SearchForm } from 'components/atoms/SearchForm/SearchForm';
import { MovieList } from 'components/molecules/MovieList/MovieList';

export const Movies = () => {
  const array = [
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
  ];
  return (
    <>
      <SearchForm />
      <MovieList movies={array} />
    </>
  );
};
