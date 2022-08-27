import { Spinner } from 'components';
import { getReviews } from '../../services/movieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Reviews.module.css';

function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesReviewsById = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);

        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesReviewsById();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });
  return (
    <>
      {isLoading && <Spinner />}
      {reviews.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We don't have any reviews for this movie, sorry</p>
      )}
    </>
  );
}

export default Reviews;
