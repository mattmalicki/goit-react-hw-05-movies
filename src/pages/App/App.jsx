import { Routes, Route } from 'react-router';

import { Movies } from 'pages/Movies/Movies';
import { Header } from 'components/organisms/Header/Header';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Trending } from 'components/organisms/Trending/Trending';

export const App = () => {
  return (
    <>
      <Routes>
        <Header />
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
