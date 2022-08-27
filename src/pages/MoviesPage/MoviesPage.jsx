import { Searchbar } from 'components';
import s from './MoviesPage.module.css';

function MoviesPage() {
  return (
    <main>
      <h2 className={s.title}>Search movie</h2>
      <Searchbar />
    </main>
  );
}

export default MoviesPage;
