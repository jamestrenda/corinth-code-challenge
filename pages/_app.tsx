import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { Layout } from '@/components/layout';
import { Reducer, useReducer } from 'react';
import { AppProvider, StateProps } from '@/components/appStateProvider';

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

export default function MyApp({ Component, pageProps }: AppProps) {
  // TODO: add Head/Meta stuff...

  const initialState = {
    searchTerm: '',
    characters: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyles />
      <AppProvider value={{ state: { ...state }, dispatch }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
