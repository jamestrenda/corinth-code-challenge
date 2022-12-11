import { Person } from '@/components/profile';
import { IResource } from 'types/swapi';
interface IPersonResource extends IResource {
  results: Person[];
}

export const fetchPeople = async (): Promise<IPersonResource> => {
  // setup an array to store the people from each request
  let results: Person[] = [];

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
          person.films.map(async (film) => {
            const res = await fetch(String(film));
            return await res.json();
          })
        ).then((data) => {
          return data.map(({ episode_id, title, url }) => ({
            episode_id,
            title,
            url,
          }));
        });

        // fetch species data
        const species = await Promise.all(
          person.species.map(async (speciesUrl) => {
            const res = await fetch(speciesUrl);
            return await res.json();
          })
        ).then((response) => response.map((data) => data.name));

        // fetch starship data
        const starships = await Promise.all(
          person.starships.map(async (starshipUrl) => {
            const res = await fetch(starshipUrl);
            return await res.json();
          })
        ).then((data) => data.map((data) => data.name).join(', '));

        // return the person with the updated data
        return {
          ...person,
          filmData,
          species,
          starships,
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
