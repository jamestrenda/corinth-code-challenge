import { IResource } from './fetchPeople';

interface IFilmResource extends IResource {
  results: Film[];
}

export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
export const fetchFilms = async (): Promise<IFilmResource> => {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();
  return data as IFilmResource;
};
