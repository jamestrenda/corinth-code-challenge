import { Person } from '@/components/profile';
import { IResource } from 'types/swapi';
import { Film } from './fetchFilms';
interface IPersonResource extends IResource {
  results: Person[];
}

export const fetchPeople = async (): Promise<IPersonResource> => {
  // setup an array to store the people from each request
  let results: Person[] = [];

  // store fetched films, species, and starships to avoid making duplicate requests
  const films = new Map();
  const species = new Map();
  const starships = new Map();

  // fetch all people
  const fetchMore = async (
    endpoint = 'https://swapi.dev/api/people/'
  ): Promise<IPersonResource> => {
    const res = await fetch(endpoint);
    const data = await res.json();

    // intercept data and add film/species/starship data to each person...
    const updatedPersonData = await Promise.all(
      data.results.map(async (person: Person) => {
        // fetch film data
        const filmData = await Promise.all(
          person.films.map(async (f) => {
            // check if film data has already been fetched and stored
            if (!films.has(f)) {
              // if not, fetch the film data and convert to json
              const res = await fetch(String(f));
              const data = await res.json();

              const film = {
                episode_id: data.episode_id,
                title: data.title,
                url: data.url,
              };

              // store the film data for subsequent requests
              films.set(f, film);

              // return the film data used to update the person object
              return film;
            }
            // if film data has already been fetched, return the stored data
            return films.get(f);
          })
        );

        // fetch species data
        const speciesData = await Promise.all(
          person.species.map(async (speciesUrl) => {
            // check if species data has already been fetched and stored
            if (!species.has(speciesUrl)) {
              // if not, fetch the species data and convert to json
              const res = await fetch(speciesUrl);
              const data = await res.json();
              // store the species data for subsequent requests
              species.set(speciesUrl, data.name);
              // return the species data used to update the person object
              return data.name;
            }
            // if species data has already been fetched, return the stored data
            return species.get(speciesUrl);
          })
        );

        // fetch starship data
        const starshipsData = await Promise.all(
          person.starships.map(async (starshipUrl) => {
            // check if starship data has already been fetched and stored
            if (!starships.has(starshipUrl)) {
              // if not, fetch the starship data and convert to json
              const res = await fetch(starshipUrl);
              const data = await res.json();
              // store the starship data for subsequent requests
              starships.set(starshipUrl, data.name);
              // return the starship data used to update the person object
              return data.name;
            }
            // if starship data has already been fetched, return the stored data
            return starships.get(starshipUrl);
          })
        ).then((data) => data.join(', '));

        // return the person with the updated data
        return {
          ...person,
          filmData,
          species: speciesData,
          starships: starshipsData,
        };
      })
    );

    results.push(...updatedPersonData);

    // store the results
    // make additional api calls for each remaining page (api limits response to 10 results each)
    return !data.next
      ? ({ ...data, results } as IPersonResource)
      : fetchMore(data.next);
  };

  return fetchMore();
};
