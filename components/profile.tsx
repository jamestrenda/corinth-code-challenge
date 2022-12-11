import { Film } from 'lib/fetchFilms';
import tw from 'twin.macro';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { getHeightInFeetAndInches } from 'utils/getHeightInFeetAndInches';
import { getWeightInPounds } from 'utils/getWeightInPounds';
import { ProfileSection } from './profileSection';
import { ProfileSectionContent } from './profileSectionContent';
import { ProfileSectionHeading } from './profileSectionHeading';

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  species: string[];
  starships: string[];
  filmData: Film[];
  films: string[];
  url?: string;
};

// TODO: fade in each profile card

export const Profile: React.FC<Person> = (props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    birth_year,
    species,
    filmData,
    starships,
  } = props;

  return (
    <article tw="relative text-white p-6 bg-gray-900 rounded-md [content: ''] group-hover:[&:not(:hover)]:before:bg-black/50 before:h-full before:w-full before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all">
      <h2 tw="text-4xl italic text-gray-400 mb-4 font-serif [text-shadow: 5px 5px rgba(0,0,0,.5)]">
        {name}
      </h2>
      <ProfileSection>
        <ProfileSectionHeading heading="About Me" />
        <ProfileSectionContent>
          <ul tw="grid lg:grid-cols-2">
            <li>
              <strong>Height:</strong>{' '}
              {getHeightInFeetAndInches(Number(height))}
            </li>
            <li>
              <strong>Weight:</strong> {getWeightInPounds(mass)}
            </li>
            <li>
              <strong>Hair Color:</strong>{' '}
              {hair_color.includes(',')
                ? hair_color
                    .split(',')
                    .map((color) => {
                      return capitalizeFirstLetter(color.trim());
                    })
                    .join(', ')
                : capitalizeFirstLetter(hair_color)}
            </li>
            <li>
              <strong>DOB:</strong> {capitalizeFirstLetter(birth_year)}
            </li>
            <li tw="lg:col-span-2">
              <>
                <strong>Species:</strong>{' '}
                {species.length ? species[0] : 'Homo Sapien'}
              </>
            </li>
          </ul>
        </ProfileSectionContent>
      </ProfileSection>
      <ProfileSection>
        <ProfileSectionHeading heading="Films Appeared In" />
        <ProfileSectionContent>
          <ul>
            {filmData?.map(({ episode_id, title }) => (
              <li key={episode_id}>{title}</li>
            ))}
          </ul>
        </ProfileSectionContent>
      </ProfileSection>
      <ProfileSection>
        <ProfileSectionHeading heading="Starships Flown" />
        <ProfileSectionContent>
          {starships.length ? (
            <p tw="[text-overflow: ellipsis] overflow-auto">{starships}</p>
          ) : (
            'None'
          )}
        </ProfileSectionContent>
      </ProfileSection>
    </article>
  );
};
