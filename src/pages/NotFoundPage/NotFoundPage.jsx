import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>Oops... nothing to show</h2>
      <Link to="/">home page</Link>
    </>
  );
};

export default NotFoundPage;
