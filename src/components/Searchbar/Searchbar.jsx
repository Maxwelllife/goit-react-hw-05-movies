import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { searchMovies } from '../../services/movieApi';
import { MoviesList, Spinner } from 'components';

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data);
        console.log('data: ', data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchMoviesBySearch();
    }
  }, [query]);

  // const handledInputChange = e => {
  //   setQuery(e.currentTarget.value.toLowerCase());
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams =
      inputRef.current.value !== '' ? { query: inputRef.current.value } : {};
    console.log('inputRef.current.value', inputRef.current.value);
    setSearchParams(nextParams);
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className={s.buttonIcon}>
            <BsSearch size="15px" />
          </button>

          <input
            // onChange={handledInputChange}
            // value={query}
            ref={inputRef}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      {isLoading && <Spinner />}
      <MoviesList movies={movies} />
    </>
  );
};

// Searchbar.propTypes = {
//   catchSubmitInfo: PropTypes.func.isRequired,
// };

export default Searchbar;
