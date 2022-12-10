import React, { ChangeEventHandler, createContext, Dispatch } from 'react';
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

const AppProvider: React.FC<{
  value: AppContext;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
