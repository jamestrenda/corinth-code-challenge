import { Directory } from '@/components/directory';
import { Person } from '@/components/profile';
import { GetStaticProps } from 'next';
import { fetchPeople } from 'lib/fetchPeople';
import { episodes } from '@/components/nav';

export default function Episode({ characters }: { characters: Person[] }) {
  return <Directory characters={characters} />;
}

export const getStaticProps: GetStaticProps<{
  characters: Person[];
}> = async (context) => {
  const { params } = context;

  const results = await fetchPeople();

  const characters = Array.from(
    results.filter((result) =>
      result.filmData.some((film) => film.episode_id.toString() === params?.id)
    ),
    (char) => ({
      name: char.name,
      height: char.height,
      mass: char.mass,
      hair_color: char.hair_color,
      birth_year: char.birth_year,
      species: char.species,
      films: char.films,
      filmData: char.filmData,
      starships: char.starships,
      url: char.url,
    })
  );

  return {
    props: {
      characters,
    },
  };
};

export async function getStaticPaths() {
  const paths = episodes.map((episode) => ({
    params: {
      id: episode.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
