import s from './OneMovieDetails.module.css';
import PropTypes from 'prop-types';

function OneMovieDetails({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  overview,
  genres,
}) {
  const score = (10 * vote_average).toFixed();
  const releaseYear = new Date(release_date).getFullYear();

  const genresList = genres?.map(genre => genre.name).join(', ');
  // console.log('genresList: ', genresList);

  poster_path
    ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
    : (poster_path =
        'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');

  return (
    <div>
      <div className={s.item} key={id}>
        <img src={poster_path} alt={title} className={s.img} width="232" />
        <div className={s.description}>
          <h2 className={s.title}>
            {title} ({releaseYear})
          </h2>
          <p className={s.text}>
            User score: {score ? score : 'Sorry, information not avalaible'}%
          </p>
          <h3 className={s.title}>Overview</h3>
          <p className={s.text}>
            {overview ? overview : 'Sorry, information not avalaible'}
          </p>
          <h3 className={s.title}>Genres</h3>
          <p className={s.text}>
            {genresList.length > 0
              ? genresList
              : 'Sorry, information not avalaible'}
          </p>
        </div>
      </div>
    </div>
  );
}

OneMovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default OneMovieDetails;
