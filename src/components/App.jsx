import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />}>
          <Route path=':movieId'>
            <Route path='cast'></Route>
            <Route path='reviews'></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
