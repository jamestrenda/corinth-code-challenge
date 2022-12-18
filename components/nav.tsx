import tw, { styled } from 'twin.macro';
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
  return (
    <nav>
      <ul tw="flex gap-8 font-bold text-gray-500 justify-center items-center uppercase">
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/1">
            i
          </StyledActiveLink>
        </li>
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/2">
            ii
          </StyledActiveLink>
        </li>
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/3">
            iii
          </StyledActiveLink>
        </li>
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/4">
            iv
          </StyledActiveLink>
        </li>
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/5">
            v
          </StyledActiveLink>
        </li>
        <li tw="h-12 grid place-items-center">
          <StyledActiveLink activeClassName="active" href="/episodes/6">
            vi
          </StyledActiveLink>
        </li>
      </ul>
    </nav>
  );
};
