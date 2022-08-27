import { Spinner } from 'components';
import { getActors } from '../../services/movieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './Cast.module.css';

function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setIsLoading(true);
      try {
        const data = await getActors(movieId);
        // console.log('ActorsArray: ', data.cast);
        setActors(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesBySearch();
  }, [movieId]);

  const elements = actors.map(({ id, name, profile_path }) => {
    profile_path
      ? (profile_path = `https://image.tmdb.org/t/p/w500/${profile_path}`)
      : (profile_path =
          'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');
    return (
      <li className={s.item} key={id}>
        <img className={s.img} src={profile_path} alt={name} /> <p>{name}</p>
      </li>
    );
  });
  return (
    <>
      {isLoading && <Spinner />}
      {actors.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We don't have information about cast</p>
      )}
    </>
  );
}

export default Cast;
