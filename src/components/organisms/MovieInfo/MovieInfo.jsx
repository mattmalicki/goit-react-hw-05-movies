import { Routes, Route, useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { Cast } from 'components/molecules/Cast/Cast';
import { Reviews } from 'components/molecules/Reviews/Reviews';
import { MovieData } from 'components/molecules/MovieData/MovieData';
import { MovieMoreInfo } from 'components/atoms/MovieMoreInfo/MovieMoreInfo';

import { fetchDetailsMovie } from 'services/fetchFromApi';

export const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    async function getMovieInfo() {
      const info = await fetchDetailsMovie(id);
      setMovieInfo({ ...info });
    }
    getMovieInfo();
  }, [id]);

  return (
    <>
      <MovieData movie={movieInfo} />
      <MovieMoreInfo />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cast" element={<Cast />} />
      </Routes>
    </>
  );
};
