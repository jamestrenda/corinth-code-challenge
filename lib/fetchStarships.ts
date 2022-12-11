export type Starship = {
  name: string;
  url: string;
};
export const fetchStarships = async (endpoint: string): Promise<Starship> => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data as Starship;
};
