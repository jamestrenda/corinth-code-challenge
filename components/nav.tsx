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
    // when this component mounts, dynamically fetch films to set as paths for the nav
    const fetchData = async () => {
      const { results } = await fetchFilms();

      // convert episode_id's to roman numerals
      const paths = results.map((film) => ({
        id: film.episode_id.toString(),
        roman: getRomanNumeral(film.episode_id) || '',
      }));

      setPaths(paths);
    };
    try {
      fetchData();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <nav>
      <ul tw="flex gap-8 font-bold text-gray-500 justify-center items-center uppercase">
        <StyledActiveLink activeClassName="active" href="/episodes/1">
          <li tw="h-12 grid place-items-center">i</li>
        </StyledActiveLink>
        <StyledActiveLink activeClassName="active" href="/episodes/2">
          <li tw="h-12 grid place-items-center">ii</li>
        </StyledActiveLink>
        <StyledActiveLink activeClassName="active" href="/episodes/3">
          <li tw="h-12 grid place-items-center">iii</li>
        </StyledActiveLink>
        <StyledActiveLink activeClassName="active" href="/episodes/4">
          <li tw="h-12 grid place-items-center">iv</li>
        </StyledActiveLink>
        <StyledActiveLink activeClassName="active" href="/episodes/5">
          <li tw="h-12 grid place-items-center">v</li>
        </StyledActiveLink>
        <StyledActiveLink activeClassName="active" href="/episodes/6">
          <li tw="h-12 grid place-items-center">vi</li>
        </StyledActiveLink>
      </ul>
    </nav>
  );
};
