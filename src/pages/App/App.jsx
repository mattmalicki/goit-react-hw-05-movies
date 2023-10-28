import { Routes, Route } from 'react-router';

import { Movies } from 'pages/Movies/Movies';
import { Header } from 'components/organisms/Header/Header';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Trending } from 'pages/Trending/Trending';
import { MovieInfo } from 'components/organisms/MovieInfo/MovieInfo';

export const App = () => {
  return (
    <>
      <Routes>
        <Header />
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
