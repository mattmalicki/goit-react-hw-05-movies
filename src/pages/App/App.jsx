import { Routes, Route } from 'react-router';
import { lazy } from 'react';

import Header from '../../components/organisms/Header/Header';
import { SharedLayout } from 'components/organisms/SharedLayout/SharedLayout';

import styles from './App.module.css';

const Movies = lazy(() => import('../Movies/Movies'));
// const Header = import('../../components/organisms/Header/Header');
const Trending = lazy(() => import('../Trending/Trending'));
const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
const MovieInfo = lazy(() =>
  import('../../components/organisms/MovieInfo/MovieInfo')
);

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Trending />} />
        <Route path="/movies/*" element={<Movies />} />
        <Route path="/movies/:id/*" element={<MovieInfo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
