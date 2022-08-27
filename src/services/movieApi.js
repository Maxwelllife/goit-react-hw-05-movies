import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'eb87ea8e65ad3520d4ba03c42b454490',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  // console.log('data: ', data);
  return data.results;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  //api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  return data.results;
};
export const getMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  // const { data } = await instance.get(`/movie/`, { params: { movieId } });

  return data;
};

export const getActors = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};
export const getReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`);
  return data.results;
};
