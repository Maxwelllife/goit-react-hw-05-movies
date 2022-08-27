import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
  const elements = movies.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}/`}>{title}</Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

export default MoviesList;
