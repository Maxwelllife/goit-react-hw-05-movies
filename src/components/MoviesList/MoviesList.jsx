import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  const location = useLocation();

  const elements = movies.map(({ id, title, poster_path }) => {
    poster_path
      ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
      : (poster_path =
          'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');

    const finalTitle = function () {
      if (title.length <= 40) {
        return title;
      } else {
        return title.slice(0, 38) + '...';
      }
    };
    return (
      <li className={s.item} key={id}>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          <img src={poster_path} alt={title} className={s.img} width="200" />
          <p className={s.title}>{finalTitle()}</p>
        </Link>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MoviesList;
