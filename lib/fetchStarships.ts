import { IResource } from 'types/swapi';

export type Starships = {
  name: string;
  url: string;
};
export interface IStarshipsResource extends IResource {
  results: Starships[];
}
export const fetchStarships = async (): Promise<IStarshipsResource> => {
  // setup an array to store the people from each request
  let results: Starships[] = [];

  const fetchMore = async (
    endpoint = 'https://swapi.dev/api/starships/'
  ): Promise<IStarshipsResource> => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      results.push(...data.results);

      // store the results
      // make additional api calls for each remaining page (api limits response to 10 results each)
      return !data.next
        ? ({ ...data, results } as IStarshipsResource)
        : fetchMore(data.next);
    } catch (error) {
      console.error(error);
      return { count: 0, next: null, previous: null, results: [] };
    }
  };

  return fetchMore();
};
