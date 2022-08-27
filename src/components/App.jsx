import 'modern-normalize/modern-normalize.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

// import { HomePage, MovieDetailsPage, MoviesPage } from 'pages';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
