import s from './MovieDetailsPage.module.css';

import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { Cast, OneMovieDetails, Reviews, Spinner } from 'components';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/movieApi';

function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  // только запрос и передаем муви айди в отдельный компонент который рендерит инфу об одном фильме
  useEffect(() => {
    const fetchMoviesByID = async () => {
      setIsLoading(true);
      try {
        console.log('movieId: ', movieId);
        const data = await getMovieDetails(movieId);
        console.log('databyID: ', data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByID();
  }, [movieId]);
  const isMovie = Object.keys(movie).length > 0;
  return (
    <>
      {isLoading && <Spinner />}
      {isMovie && (
        <>
          <OneMovieDetails {...movie} />
          <ul>
            <NavLink className={s.link} to={'cast'}>
              Cast
            </NavLink>

            <NavLink className={s.link} to={'reviews'}>
              Reviews
            </NavLink>
          </ul>
        </>
      )}

      <Routes>
        <Route path={'cast'} element={<Cast />} />
        <Route path={'reviews'} element={<Reviews />} />
      </Routes>
    </>
  );
}

export default MovieDetailsPage;
