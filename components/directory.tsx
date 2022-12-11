import { Profile, Person } from './profile';
import tw from 'twin.macro';
import { useContext } from 'react';
import { AppContext } from './appStateProvider';

type Props = {
  characters: Person[];
};

export const Directory: React.FC<Props> = ({ characters }) => {
  const { state } = useContext(AppContext);
  const { searchTerm } = state;

  const filteredCharacters = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchTerm)
  );

  return (
    <div tw="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl m-auto">
      {filteredCharacters.map((char) => (
        <Profile
          key={char.url}
          name={char.name}
          height={char.height}
          mass={char.mass}
          hair_color={char.hair_color}
          birth_year={char.birth_year}
          species={char.species}
          filmData={char.filmData}
          films={char.films}
          starships={char.starships}
        />
      ))}
    </div>
  );
};
