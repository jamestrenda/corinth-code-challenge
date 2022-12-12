import { IResource } from 'types/swapi';

export type Species = {
  name: string;
  url: string;
};
interface ISpeciesResource extends IResource {
  results: Species[];
}
export const fetchSpecies = async (
  endpoint: string
): Promise<ISpeciesResource> => {
  // setup an array to store the people from each request
  let results: Species[] = [];

  const fetchMore = async (
    endpoint = 'https://swapi.dev/api/species/'
  ): Promise<ISpeciesResource> => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      results.push(...data.results);

      // store the results
      // make additional api calls for each remaining page (api limits response to 10 results each)
      return !data.next
        ? ({ ...data, results } as ISpeciesResource)
        : fetchMore(data.next);
    } catch (error) {
      console.error(error);
      return { count: 0, next: null, previous: null, results: [] };
    }
  };

  return fetchMore();
};
