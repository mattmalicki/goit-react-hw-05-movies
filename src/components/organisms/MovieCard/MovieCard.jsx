import { Routes, Route } from 'react-router';

import { Cast } from 'components/molecules/Cast/Cast';
import { Reviews } from 'components/molecules/Reviews/Reviews';
import { MovieData } from 'components/molecules/MovieData/MovieData';
import { MovieMoreInfo } from 'components/atoms/MovieMoreInfo/MovieMoreInfo';

export const MovieCard = () => {
  return (
    <>
      <MovieData />
      <MovieMoreInfo />
      <Routes>
        <Route path="/:id/reviews" element={<Reviews />} />
        <Route path="/:id/cast" element={<Cast />} />
      </Routes>
    </>
  );
};
