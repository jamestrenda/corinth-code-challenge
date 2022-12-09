import { Profile, Person } from './profile';
import tw from 'twin.macro';

export const Directory = ({ characters }: { characters: Person[] }) => {
  return (
    <div tw="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl m-auto">
      {characters.map((char) => (
        <Profile
          key={char.url}
          name={char.name}
          height={char.height}
          mass={char.mass}
          hair_color={char.hair_color}
          birth_year={char.birth_year}
          species={char.species}
          films={char.films}
          starships={char.starships}
        />
      ))}
    </div>
  );
};
