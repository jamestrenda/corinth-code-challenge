import tw, { styled } from 'twin.macro';
import { getRomanNumeral } from 'utils/getRomanNumeral';
import ActiveLink from './activeLink';

export const episodes = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const StyledActiveLink = styled(ActiveLink)`
  &.active {
    ${tw`text-yellow-400`},
  }
`;

export const Nav: React.FC = () => {
  return (
    <nav>
      <ul tw="flex gap-8 font-bold text-gray-500 justify-center items-center uppercase">
        {episodes.map((episode) => (
          <li key={`episode-${episode.id}`} tw="h-12 grid place-items-center">
            <StyledActiveLink
              activeClassName="active"
              href={`/episodes/${episode.id}`}
            >
              {getRomanNumeral(episode.id)}
            </StyledActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
