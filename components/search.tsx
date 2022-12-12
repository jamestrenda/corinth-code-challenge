import { ChangeEvent, useContext } from 'react';
import { AppContext, ReducerActionType } from './appStateProvider';
import tw from 'twin.macro';

// TODO: add hover/focus states to input
export const Search: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
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
        tw="w-full text-center text-gray-400 p-4 my-4 bg-transparent border border-gray-900 rounded-full uppercase text-[100%] lg:text-xs tracking-widest focus:outline-none focus:ring-2 focus:ring-gray-900 focus:text-yellow-300"
        type="search"
        name="search"
        placeholder="Filter by name..."
        onChange={handleSearch}
        value={state.searchTerm}
      />
    </div>
  );
};
