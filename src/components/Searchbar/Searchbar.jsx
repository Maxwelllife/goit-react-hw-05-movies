import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { searchMovies } from '../../services/movieApi';
import { MoviesList, Spinner } from 'components';
import { toast } from 'react-toastify';

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
        if (data.length === 0) {
          toast.error(`Oops, i dont have this movie, sorry`, {
            theme: 'colored',
          });
        }
        setMovies(data);
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
      inputRef.current.value !== '' ? { query: inputRef.current.value } : '';
    // console.log('inputRef.current.value', inputRef.current.value);
    setSearchParams(nextParams);
    console.log('nextParams: ', nextParams);

    if (!nextParams) {
      toast.error(`Search field is empty`, { theme: 'colored' });
    }
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
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Searchbar;
