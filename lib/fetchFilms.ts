import { IResource } from 'types/swapi';
export interface IFilmResource extends IResource {
  results: Film[];
}

export type Film = {
  title: string;
  episode_id: number;
  url: string;
};
export const fetchFilms = async (): Promise<IFilmResource> => {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();
  return data as IFilmResource;
};
