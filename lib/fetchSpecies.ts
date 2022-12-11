export type Species = {
  name: string;
  url: string;
};
export const fetchSpecies = async (endpoint: string): Promise<Species> => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data as Species;
};
