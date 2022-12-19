import { Person } from './profile';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AppContext, ReducerActionType } from './appStateProvider';
import 'twin.macro';
import { useRouter } from 'next/router';
import ProfileSkeleton from './profileSkeleton';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Profile = React.lazy(() => import('./profile'));

type Props = {
  characters: Person[];
};

/**
 *
 * @param characters — full list of characters from SWAPI
 * @returns a list of characters that are filtered by the search term or the first perPage characters if the search term is empty
 */

export const Directory: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { searchTerm, characters } = state;
  const router = useRouter();

  const perPage = 6;
  const [charactersLoaded, setCharactersLoaded] = useState<Person[] | []>([]);
  const [hasMore, setHasMore] = useState<Boolean>(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore(
            characters.slice(
              charactersLoaded.length,
              charactersLoaded.length + perPage
            )
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [charactersLoaded, hasMore]
  );

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: ReducerActionType.SET_CHARACTERS,
        payload: props.characters,
      });
    }
  }, [router.query.id]);

  useEffect(() => {
    setCharactersLoaded(getFirstPage(characters));
  }, [characters]);

  useEffect(() => {
    if (!searchTerm) {
      setHasMore(charactersLoaded?.length < characters?.length);
    }
  }, [charactersLoaded]);

  useEffect(() => {
    if (searchTerm) {
      setCharactersLoaded(filteredCharacters());
      setHasMore(false);
    } else {
      setCharactersLoaded(getFirstPage(characters));
      setHasMore(charactersLoaded?.length < characters?.length);
    }
  }, [searchTerm]);

  const filteredCharacters = () =>
    characters?.filter((character) =>
      character.name.toLocaleLowerCase().includes(searchTerm)
    );

  const loadMore = (nextPage: Person[]) => {
    setCharactersLoaded((prev) => {
      setHasMore(charactersLoaded.length < characters.length);
      return [...prev, ...nextPage];
    });
  };

  const getFirstPage = (items: Person[] | []) => {
    return items ? items.slice(0, perPage) : [];
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        tw="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl m-auto"
        className="group"
      >
        {characters.length
          ? Array(perPage)
              .fill('')
              .map((item, index) => <ProfileSkeleton key={index} />)
          : charactersLoaded.map((char, index) => (
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
                url={char.url}
                ref={
                  charactersLoaded.length === index + 1 ? lastElementRef : null
                }
              />
            ))}
      </m.div>
    </LazyMotion>
  );
};
