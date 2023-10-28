import { MovieList } from 'components/molecules/MovieList/MovieList';

export const Trending = () => {
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
      <h2>Trending today</h2>
      <MovieList movies={array} />
    </>
  );
};
