import { Person } from '@/components/profile';

export interface IResource {
  count: number;
  next: string;
  previous: string | null;
}

interface IPersonResource extends IResource {
  results: Person[];
}

export const fetchPeople = async (): Promise<IPersonResource> => {
  const res = await fetch('https://swapi.dev/api/people/');
  const data = await res.json();
  return data as IPersonResource;
};
