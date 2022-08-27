import 'modern-normalize/modern-normalize.css';
import { HomePage, MovieDetailsPage, MoviesPage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
