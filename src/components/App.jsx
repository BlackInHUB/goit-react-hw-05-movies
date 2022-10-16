import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reveiws = lazy(() => import('./Reveiws/Reveiws'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='movies/:id' element={<MovieDetails />}>
              <Route path='cast' element={<Cast />}></Route>
              <Route path='reviews' element={<Reveiws />}></Route>
            </Route>
          </Route>
          <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
      </Suspense>
    </>
  );
};
