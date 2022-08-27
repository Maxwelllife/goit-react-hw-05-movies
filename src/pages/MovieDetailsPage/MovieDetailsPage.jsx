import s from './MovieDetailsPage.module.css';

import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Cast, OneMovieDetails, Reviews, Spinner } from 'components';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/movieApi';
import { useLocation } from 'react-router-dom';

function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // только запрос и передаем муви айди в отдельный компонент который рендерит инфу об одном фильме
  useEffect(() => {
    const fetchMoviesByID = async () => {
      setIsLoading(true);
      try {
        // console.log('movieId: ', movieId);
        const data = await getMovieDetails(movieId);
        // console.log('databyID: ', data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByID();
  }, [movieId]);

  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  const isMovie = Object.keys(movie).length > 0;

  return (
    <>
      {isLoading && <Spinner />}
      {isMovie && (
        <>
          <button className={s.btn} type="button" onClick={goBack}>
            Go Back
          </button>
          <OneMovieDetails {...movie} />
          <ul>
            <Link className={s.link} state={{ from }} to={'cast'}>
              Cast
            </Link>

            <Link className={s.link} state={{ from }} to={'reviews'}>
              Reviews
            </Link>
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
