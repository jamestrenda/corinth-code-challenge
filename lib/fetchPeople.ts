import { Person } from '@/components/profile';
import { IResource } from 'types/swapi';
import { fetchFilms, Film } from './fetchFilms';
import { fetchSpecies } from './fetchSpecies';
import { fetchStarships } from './fetchStarships';
interface IPersonResource extends IResource {
  results: Person[];
}

export const fetchPeople = async (): Promise<Person[]> => {
  // setup an array to store the people from each request
  let results: Person[] = [];

  // store fetched films, species, and starships to avoid making duplicate requests
  const filmsSet = new Map<string, Film>();
  const speciesSet = new Map<string, string>();
  const starshipsSet = new Map<string, string>();

  const { results: films } = await fetchFilms();

  for (const film of films) {
    filmsSet.set(film.url, {
      title: film.title,
      episode_id: film.episode_id,
      url: film.url,
    });
  }
  const { results: species } = await fetchSpecies();
  for (const s of species) {
    speciesSet.set(s.url, s.name);
  }
  const { results: starships } = await fetchStarships();
  for (const starship of starships) {
    starshipsSet.set(starship.url, starship.name);
  }

  // fetch each page beginning with the first page
  const fetchMore = async (
    endpoint = 'https://swapi.dev/api/people/'
  ): Promise<Person[]> => {
    // fetch the default endpoint or the next page
    const response = await fetch(endpoint);
    // convert the response to json
    const people: IPersonResource = await response.json();

    // loop through each person in the response and add the film, species, and starship data
    for (const person of people.results) {
      // create a new person object and replace the film, species, and starship urls with the data
      const personWithDataFilledIn: Person = {
        ...person,
        filmData: [],
        species: [],
        starships: [],
      };

      // get the film data
      for (const film of person.films) {
        if (!filmsSet.has(film)) {
          continue;
        }
        personWithDataFilledIn.filmData = [
          ...personWithDataFilledIn.filmData,
          filmsSet.get(film),
        ];
      }

      // get the species data
      for (const species of person.species) {
        if (!speciesSet.has(species)) {
          continue;
        }
        personWithDataFilledIn.species = [
          ...personWithDataFilledIn.species,
          speciesSet.get(species),
        ]!;
      }

      // get the starship data
      for (const starship of person.starships) {
        if (!starshipsSet.has(starship)) {
          continue;
        }
        personWithDataFilledIn.starships = [
          ...personWithDataFilledIn.starships,
          starshipsSet.get(starship),
        ]!;
      }

      // add the person with updated data to the results array
      results = [...results, personWithDataFilledIn];
    }

    // make additional api calls for each remaining page (api limits response to 10 results each)
    return !people.next ? results : fetchMore(people.next);
  };
  return await fetchMore();
};
