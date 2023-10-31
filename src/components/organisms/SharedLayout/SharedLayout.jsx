import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/atoms/Loader/Loader';
// import { Header } from 'components/organisms/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
