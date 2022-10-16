import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar/Appbar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
