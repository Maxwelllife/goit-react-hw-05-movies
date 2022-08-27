import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movieApi';
import { MoviesList, Spinner } from 'components';

import s from './HomePage.module.css';

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getTrendingMovies();
        // console.log('data: ', data);
        setMovies(data);
      } catch (error) {
        console.log('error: ', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      {isLoading && <Spinner />}
      <h2 className={s.title}>Popular movies today</h2>
      <MoviesList movies={movies} />
    </main>
  );
}

export default HomePage;
