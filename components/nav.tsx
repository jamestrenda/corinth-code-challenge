import tw, { styled } from 'twin.macro';
import { NavLink } from './navLink';
import { getRomanNumeral } from '../utils/getRomanNumeral';
import { fetchFilms } from 'lib/fetchFilms';
import { useEffect, useState } from 'react';
import ActiveLink from './activeLink';

type Paths = {
  id: string;
  roman: string;
};

const StyledActiveLink = styled(ActiveLink)`
  &.active {
    ${tw`text-yellow-400`},
  }
`;

export const Nav: React.FC = () => {
  const [paths, setPaths] = useState<Paths[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchFilms();

      const paths = results.map((film) => ({
        id: film.episode_id.toString(),
        roman: getRomanNumeral(film.episode_id) || '',
      }));

      setPaths(paths);
    };
    try {
      fetchData();
    } catch (error) {
      // TODO: update app state with error
      console.log({ error });
    }
  }, []);

  return (
    <nav>
      <ul tw="flex gap-8 font-bold text-gray-500 justify-center">
        {paths
          ?.sort((a, b) => Number(a.id) - Number(b.id))
          .map(({ id, roman }) => (
            <NavLink key={roman}>
              <StyledActiveLink
                activeClassName="active"
                href={`/episodes/${id}`}
              >
                {roman.toUpperCase()}
              </StyledActiveLink>
            </NavLink>
          ))}
      </ul>
    </nav>
  );
};
