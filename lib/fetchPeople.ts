import { Person } from '@/components/profile';

export interface IResource {
  count: number;
  next: string | null;
  previous: string | null;
}

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

    // store the results
    results.push(...data.results);

    // make additional api calls for each remaining page (api limits response to 10 results each)
    return !data.next
      ? ({ ...data, results } as IPersonResource)
      : fetchMore(data.next);
  };

  return fetchMore();
};
