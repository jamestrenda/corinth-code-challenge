import { Film } from './fetchFilms';

export const fetchFilm = async (endpoint: string): Promise<Film> => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data as Film;
};
