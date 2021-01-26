import React from 'react';
import { RootStore } from './rootStore';

export const rootStore = new RootStore();
const stores = {
  userStore: rootStore.userStore,
};

export const StoresContext = React.createContext(stores);

export const StoreProvider = ({ children }) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);

export const useStores = () => React.useContext(StoresContext);
