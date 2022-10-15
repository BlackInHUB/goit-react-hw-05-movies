import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />}>
            <Route path=':movieId'>
              <Route path='cast'></Route>
              <Route path='reviews'></Route>
            </Route>
          </Route>
          </Route>
      </Routes>
    </>
  );
};
