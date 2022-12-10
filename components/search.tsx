import { ReducerActionType } from '@/pages/_app';
import { ChangeEvent, useContext } from 'react';
import tw from 'twin.macro';
import { AppContext } from './appStateProvider';

// TODO: implement search functionality
// TODO: add hover/focus states to input
export const Search: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    dispatch &&
      dispatch({
        type: ReducerActionType.SET_SEARCH_TERM,
        payload: value.toLocaleLowerCase(),
      });
  };
  return (
    <div tw="max-w-lg m-auto">
      <input
        tw="w-full text-center text-gray-400 p-4 my-4 bg-transparent border border-gray-900 rounded-full uppercase text-xs tracking-widest"
        type="search"
        name="search"
        placeholder="Filter by character name..."
        onChange={handleSearch}
      />
    </div>
  );
};
