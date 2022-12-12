import { useRouter } from 'next/router';
import React, {
  ChangeEventHandler,
  createContext,
  Dispatch,
  Reducer,
  useEffect,
  useReducer,
} from 'react';
import { Person } from './profile';

export type StateProps = {
  searchTerm: string;
  characters: Person[] | null;
  onChangeHandler?: ChangeEventHandler | undefined;
};

type AppContext = {
  state: StateProps;
  dispatch?: Dispatch<any>;
};
const AppContext = createContext<AppContext>({
  state: { searchTerm: '', characters: [] },
});

export enum ReducerActionType {
  SET_SEARCH_TERM,
  SET_CHARACTERS,
}

export type ReducerAction = {
  type: ReducerActionType;
  payload?: any;
};
const reducer: Reducer<StateProps, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload };
    }
    case ReducerActionType.SET_CHARACTERS: {
      return { ...state, characters: action.payload };
    }
    default:
      return state;
  }
};

const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const initialState = {
    searchTerm: '',
    characters: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      dispatch({ type: ReducerActionType.SET_SEARCH_TERM, payload: '' });
    }
  }, [query]);

  return (
    <AppContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
